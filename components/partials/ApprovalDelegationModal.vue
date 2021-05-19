<template lang="pug">
.approval-delegation-modal-wrapper
  .card
    .card-header
    .card-content
      form.tw-grid(name='perfil')
        b-field.mx-2(:label='$t("register")')
          b-autocomplete(
            :open-on-focus='true',
            :data='listOfUsers',
            v-model='userSubstituteId',
            size='is-small',
            @select='(user) => handleSelectUser(user)'
          )
        b-field.mx-2(:label='$t("initialDate")')
          b-datepicker(
            :append-to-body='true',
            icon='calendar-today',
            size='is-small',
            :min-date='minDate',
            locale='pt-BR',
            :placeholder='$t("selectDate")',
            @input='(value) => handleChangeTerm("beginTermDate", value)'
          )
        b-field.mx-2(:label='$t("finalDate")')
          b-datepicker(
            icon='calendar-today',
            :append-to-body='true',
            size='is-small',
            :min-date='minDate',
            locale='pt-BR',
            :placeholder='$t("selectDate")',
            @input='(value) => handleChangeTerm("endTermDate", value)'
          )

    .card-footer.tw-px-6.tw-py-4.tw-flex.tw-justify-end
      .wrapper-buttons
        b-button.tw-mr-4(type='is-danger', @click='$emit("close")') {{ $t("cancel") }}
        b-button(
          :disabled='!isEnableToConfirm',
          type='is-primary',
          @click='handleCreateApprovalDelegation'
        ) {{ $t("save") }}
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
import showToast from '../../utils/toast'
export default {
  name: 'ApprovalDelegationModal',
  components: {},
  props: {},
  data() {
    return {
      searchUser: '',
      minDate: null,
    }
  },
  computed: {
    ...mapState({
      approvalDelegation: (state) => state.approvalDelegation,
      searchUsersByManager: (state) => state.searchUsersByManager,
    }),
    listOfUsers() {
      return this.searchUsersByManager
        .map((user) => user.userId.toLowerCase())
        .filter((user) => {
          return user.toString().toLowerCase().includes(this.searchUser)
        })
    },
    userSubstituteId: {
      get() {
        return this.approvalDelegation.userSubstituteId
      },
      set(value) {
        this.searchUser = value
      },
    },
    isEnableToConfirm() {
      return (
        !!this.approvalDelegation.userSubstituteId &&
        !!this.approvalDelegation.beginTermDate &&
        !!this.approvalDelegation.endTermDate
      )
    },
  },
  watch: {},
  mounted() {
    this.minDate = this.$moment().subtract(1, 'd').toDate()
  },
  created() {},
  methods: {
    ...mapMutations(['setApprovalDelegationTerm']),
    ...mapActions(['createApprovalDelegation']),

    handleChangeTerm(key, value) {
      this.setApprovalDelegationTerm({ key, value })
    },
    async handleCreateApprovalDelegation() {
      const begin = this.$moment(this.approvalDelegation.beginTermDate)
      const end = this.$moment(this.approvalDelegation.endTermDate)
      if (end.isSameOrAfter(begin)) {
        this.$emit('close')
        await this.createApprovalDelegation()
      } else {
        showToast(this.$i18n.t('rangeDate'), 'is-danger')
      }
    },
    handleSelectUser(user) {
      if (user) {
        this.handleChangeTerm('userSubstituteId', user)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.approval-delegation-modal-wrapper {
  max-width: px2rem(875);
  margin: 0 auto;
  form {
    grid-template-columns: repeat(auto-fill, minmax(px2rem(280), 1fr));
  }
}
</style>

<style lang="scss">
.approval-delegation-modal-wrapper {
  label {
    font-size: 0.75rem;
  }
  .card-content {
    min-height: 250px;
  }
}
</style>
