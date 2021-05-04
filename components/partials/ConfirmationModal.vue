<template lang="pug">
#confirmationModal.confirmation-modal-wrapper
  .card
    .card-header.tw-p-4
      h3 Confirmar Ação!
    .card-content
      h3 Você tem certeza que deseja confirmar essa operação?
    .card-footer.tw-px-6.tw-py-4.tw-flex.tw-justify-end
      .wrapper-buttons
        b-button.tw-mr-4(type='is-danger', @click='cancel') {{ $t("cancel") }}
        b-button(type='is-primary', @click='confirm') Confirmar
</template>

<script>
export default {
  name: 'ConfirmationModal',
  components: {},
  props: {
    onConfirm: {
      type: Function,
      default: () => {},
    },
    onCancel: {
      type: Function,
      default: () => {},
    },
  },
  data() {
    return {}
  },
  computed: {},
  watch: {},
  mounted() {},
  created() {},
  methods: {
    cancel() {
      this.onCancel()
      this.$emit('close')
    },
    confirm() {
      this.onConfirm()
      this.$emit('close')
    },
  },
}
</script>

<style lang="scss" scoped>
.confirmation-modal-wrapper {
  .card-header {
    background: #7579ff;
    color: white;
  }
}
</style>
