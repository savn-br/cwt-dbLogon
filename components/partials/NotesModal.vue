<template lang="pug">
#notesModal.notes-modal-wrapper
  .card
    .card-header.tw-p-4
      h3 {{ $t("notes") }}
    .card-content
      h3 {{ message || "Sem notas" }}
    .card-footer.tw-px-6.tw-py-4.tw-flex.tw-justify-end
      .wrapper-buttons
        b-button.tw-mr-4(type='is-danger', @click='$emit("close")') {{ $t("close") }}
</template>

<script>
export default {
  name: 'NotesModal',
  components: {},
  props: {
    message: {
      type: String,
      default: () => '',
    },
  },
  data() {
    return {}
  },
  computed: {},
  watch: {},
  mounted() {},
  created() {},
  methods: {},
}
</script>

<style lang="scss" scoped>
.notes-modal-wrapper {
}
</style>
