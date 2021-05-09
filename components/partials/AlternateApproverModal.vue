<template lang="pug">
#alternateApproverModal.alternate-approver-modal-wrapper
  .card
    .card-header
    .card-content
      form.tw-grid(name='perfil')
        b-field.mx-2(:label='$t("register")')
          b-input(
            :value='substituteApprover.userSubstituteId',
            @input='(value) => handleChangeTerm("userSubstituteId", value)',
            size='is-small'
          )
        //- b-field.mx-2(:label='$t("email")')
        //-   b-input(v-model='perfil.email', size='is-small')
        //- b-field.mx-2(:label='$t("name")')
        //-   b-input(v-model='perfil.name', size='is-small')
        b-field.mx-2(label='Data inicial')
          b-input(
            :value='substituteApprover.beginTermDate',
            type='date',
            @input='(value) => handleChangeTerm("beginTermDate", value)',
            size='is-small'
          )
        b-field.mx-2(label='Data final')
          b-input(
            :value='substituteApprover.endTermDate',
            type='date',
            @input='(value) => handleChangeTerm("endTermDate", value)',
            size='is-small'
          )
    .card-footer.tw-px-6.tw-py-4.tw-flex.tw-justify-end
      .wrapper-buttons
        b-button.tw-mr-4(type='is-danger', @click='$emit("close")') {{ $t("cancel") }}
        b-button(type='is-primary', @click='handleCreateSubstituteApprover') {{ $t("save") }}
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
export default {
  name: 'AlternateApproverModal',
  components: {},
  props: {},
  data() {
    return {
      perfil: {
        register: '',
        email: '',
        name: '',
      },
    }
  },
  computed: {
    ...mapState({
      substituteApprover: (state) => state.substituteApprover,
    }),
  },
  watch: {},
  mounted() {},
  created() {},
  methods: {
    ...mapMutations(['setSubstituteApproverTerm']),
    ...mapActions(['createSubstituteApprover']),

    handleChangeTerm(key, value) {
      this.setSubstituteApproverTerm({ key, value })
    },
    async handleCreateSubstituteApprover() {
      await this.createSubstituteApprover()
      this.$emit('close')
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
}
</style>
