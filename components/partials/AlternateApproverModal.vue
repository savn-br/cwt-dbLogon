<template lang="pug">
#alternateApproverModal.alternate-approver-modal-wrapper
  .card-l
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
        //- b-field.mx-2(:label='$t("user")')
        //-   b-input(
        //-     :value='substituteApprover.userSubstituteId',
        //-     @input='(value) => handleChangeTerm("userSubstituteId", value)',
        //-     size='is-small'
        //-   )
        b-field.mx-2(label='Email')
          b-input(disabled, type='email', :value='substituteApprover.email')
        b-field.mx-2(:label='$t("initialDate")')
          b-datepicker(
            icon='calendar-today',
            size='is-small',
            :append-to-body='true',
            :min-date='minDate',
            :editable='true',
            locale='pt-BR',
            :placeholder='$t("selectDate")',
            @input='(value) => handleChangeTerm("beginTermDate", value)'
          )
        b-field.mx-2(:label='$t("finalDate")')
          b-datepicker(
            icon='calendar-today',
            size='is-small',
            :append-to-body='true',
            :min-date='minDate',
            :editable='true',
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
          @click='handleCreateSubstituteApprover'
        ) {{ $t("save") }}
</template>

<script>
import debounce from 'lodash/debounce'
import { mapState, mapMutations, mapActions } from 'vuex'
import showToast from '../../utils/toast'
export default {
  name: 'AlternateApproverModal',
  components: {},
  props: {},
  data() {
    return {
      userName: '',
      minDate: null,
      isFetching: false,
    }
  },
  computed: {
    ...mapState({
      substituteApprover: (state) => state.substituteApprover,
      collaborators: (state) => state.collaborators,
      isLoading: (state) => state.isLoading,
    }),
    isEnableToConfirm() {
      return (
        Object.values(this.substituteApprover).every((value) => !!value) &&
        this.collaborators
          .map((user) => user.userId)
          .includes(this.substituteApprover.userSubstituteId) &&
        !this.isLoading
      )
    },
  },
  watch: {},
  mounted() {
    this.minDate = this.$moment().subtract(1, 'd').toDate()
  },
  created() {},
  methods: {
    ...mapMutations(['setSubstituteApproverTerm', 'setSearchCollaboratorName']),
    ...mapActions(['createSubstituteApprover', 'getAvailableCollaborators']),

    handleChangeTerm(key, value) {
      this.setSubstituteApproverTerm({ key, value })
    },
    async handleCreateSubstituteApprover() {
      const begin = this.$moment(this.substituteApprover.beginTermDate)
      const end = this.$moment(this.substituteApprover.endTermDate)
      if (end.isSameOrAfter(begin)) {
        this.$emit('close')
        await this.createSubstituteApprover()
      } else {
        showToast(this.$i18n.t('rangeDate'), 'is-danger')
      }
    },
    handleSelectUser(user) {
      if (user.userId) {
        this.handleChangeTerm('userSubstituteId', user.userId)
        this.handleChangeTerm('email', user.email)
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
.alternate-approver-modal-wrapper {
  max-width: px2rem(875);
  margin: 0 auto;
  form {
    grid-template-columns: repeat(auto-fill, minmax(px2rem(280), 1fr));
  }
}
</style>

<style lang="scss">
.alternate-approver-modal-wrapper {
  label {
    font-size: 0.75rem;
  }
  .card-content {
    min-height: 250px;
  }
}
</style>
