<template lang="pug">
.approval-delegation-modal-wrapper
  .card
    .card-header
    .card-content
      form.tw-grid(name='perfil')
        b-field.tw-mx-2(:label='$t("findByUser")')
          b-autocomplete(
            :value='userName',
            :data='collaborators',
            :loading='isFetching',
            @typing='getAsyncData',
            @select='(option) => { handleSelectUser(option); }'
          )
            template(slot-scope='props')
              .tw-font-bold {{ props.option.userName }}
              span.tw-text-sm.tw-font-bold ID:
              span.tw-ml-1 {{ props.option.userId }}

        b-field.mx-2(label='Email')
          b-input(
            @input='(value) => handleChangeTerm("email", value)',
            type='email'
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
import debounce from 'lodash/debounce'
import { mapState, mapMutations, mapActions } from 'vuex'
import showToast from '../../utils/toast'
export default {
  name: 'ApprovalDelegationModal',
  components: {},
  props: {},
  data() {
    return {
      userName: '',
      searchUser: '',
      minDate: null,
      isFetching: false,
    }
  },
  computed: {
    ...mapState({
      approvalDelegation: (state) => state.approvalDelegation,
      collaborators: (state) => state.collaborators,
    }),

    isEnableToConfirm() {
      return Object.values(this.approvalDelegation).every((value) => !!value)
    },
  },
  watch: {},
  mounted() {
    this.minDate = this.$moment().subtract(1, 'd').toDate()
  },
  created() {},
  methods: {
    ...mapMutations(['setApprovalDelegationTerm', 'setSearchCollaboratorName']),
    ...mapActions(['createApprovalDelegation', 'getAvailableCollaborators']),

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
      if (user.userId) {
        this.handleChangeTerm('userSubstituteId', user.userId)
        this.userName = user.userName
      }
    },
    getAsyncData: debounce(async function (name) {
      this.isFetching = true
      this.setSearchCollaboratorName(name)
      await this.getAvailableCollaborators()
      this.isFetching = false
    }, 500),
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
