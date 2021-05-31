<template lang="pug">
#alternateApproverModal.alternate-approver-modal-wrapper
  .card
    .card-header
    .card-content
      form.tw-grid(name='perfil')
        b-field.mx-2(:label='$t("user")')
          b-input(
            :value='substituteApprover.userSubstituteId',
            @input='(value) => handleChangeTerm("userSubstituteId", value)',
            size='is-small'
          )
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
import { mapState, mapMutations, mapActions } from 'vuex'
import showToast from '../../utils/toast'
export default {
  name: 'AlternateApproverModal',
  components: {},
  props: {},
  data() {
    return {
      minDate: null,
    }
  },
  computed: {
    ...mapState({
      substituteApprover: (state) => state.substituteApprover,
    }),
    isEnableToConfirm() {
      return (
        !!this.substituteApprover.userSubstituteId &&
        !!this.substituteApprover.beginTermDate &&
        !!this.substituteApprover.endTermDate
      )
    },
  },
  watch: {},
  mounted() {
    this.minDate = this.$moment().subtract(1, 'd').toDate()
  },
  created() {},
  methods: {
    ...mapMutations(['setSubstituteApproverTerm']),
    ...mapActions(['createSubstituteApprover']),

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
