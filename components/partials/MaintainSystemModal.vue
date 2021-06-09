<template lang="pug">
#maintainSystemModal.maintain-system-modal-wrapper
  .card-l
    .card-header
    .card-content
      form.tw-grid(name='perfil')
        b-field(:label='$t("systemCode")', v-if='!!systemId')
          b-input(v-model='systemId', size='is-small', disabled)
        b-field(:label='$t("systemAcronym")')
          b-input(v-model='systemAcronym', size='is-small', maxlength='7')
        b-field(:label='$t("description")')
          b-input(v-model='systemName', size='is-small', maxlength='40')
        b-field(:label='$t("notes")')
          b-input(maxlength='512', type='textarea', v-model='notes')
        b-field
          b-switch(v-model='active') {{ $t("active") }}
    .card-footer.tw-px-6.tw-pb-4.tw-flex.tw-justify-end
      .wrapper-buttons
        b-button.tw-mr-4(type='is-danger', @click='$emit("close")') {{ $t("cancel") }}
        b-button(type='is-primary', @click='proccessSystemRequest') {{ $t("save") }}
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
export default {
  name: 'MaintainSystemModal',
  components: {},
  props: {},
  data() {
    return {}
  },
  computed: {
    systemId: {
      get() {
        return this.selectedSystem.systemId
      },
      set(value) {
        this.setSelectedSystemTerm({ key: 'systemId', value })
      },
    },
    systemAcronym: {
      get() {
        return this.selectedSystem.systemAcronym
      },
      set(value) {
        this.setSelectedSystemTerm({ key: 'systemAcronym', value })
      },
    },
    systemName: {
      get() {
        return this.selectedSystem.systemName
      },
      set(value) {
        this.setSelectedSystemTerm({ key: 'systemName', value })
      },
    },
    notes: {
      get() {
        return this.selectedSystem.notes
      },
      set(value) {
        this.setSelectedSystemTerm({ key: 'notes', value })
      },
    },
    active: {
      get() {
        return this.selectedSystem.active
      },
      set(value) {
        this.setSelectedSystemTerm({ key: 'active', value })
      },
    },
    ...mapState(['systemModalMode', 'selectedSystem']),
  },
  watch: {},
  mounted() {},
  created() {},
  methods: {
    ...mapMutations(['setSelectedSystemTerm']),
    ...mapActions(['saveSystem', 'getSystems', 'editSystem']),
    async proccessSystemRequest() {
      this.$emit('close')
      if (this.systemModalMode === 'save') {
        const status = await this.saveSystem()
        if (status === 200) {
          this.getSystems()
        }
      }
      if (this.systemModalMode === 'edit') {
        const status = await this.editSystem()
        if (status === 200) {
          this.getSystems()
        }
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.maintain-system-modal-wrapper {
  max-width: px2rem(875);
  margin: 0 auto;
  form {
    grid-template-columns: repeat(auto-fill, minmax(px2rem(280), 1fr));
    grid-column-gap: px2rem(15);
  }
}
</style>

<style lang="scss">
.maintain-system-modal-wrapper {
  label {
    font-size: 0.75rem;
  }
}
</style>
