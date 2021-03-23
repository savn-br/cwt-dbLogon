<template lang="pug">
#alternateApproverModal.alternate-approver-modal-wrapper
  .card
    .card-header
    .card-content
      form.tw-grid(name='perfil')
        b-field.mx-2(:label='$t("register")')
          b-input(v-model='perfil.register', size='is-small')
        b-field.mx-2(:label='$t("email")')
          b-input(v-model='perfil.email', size='is-small')
        b-field.mx-2(:label='$t("name")')
          b-input(v-model='perfil.name', size='is-small')
    .card-footer.tw-px-6.tw-py-4.tw-flex.tw-justify-end
      .wrapper-buttons
        b-button.tw-mr-4(type='is-danger', @click='$emit("close")') {{ $t("cancel") }}
        b-button(type='is-primary') {{ $t("save") }}
</template>

<script>
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
  computed: {},
  watch: {},
  mounted() {},
  created() {},
  methods: {},
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
