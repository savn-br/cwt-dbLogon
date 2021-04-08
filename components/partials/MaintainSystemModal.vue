<template lang="pug">
#maintainSystemModal.maintain-system-modal-wrapper
  .card
    .card-header
    .card-content
      form.tw-grid(name='perfil')
        b-field(label='Código do Sistema')
          b-input(v-model='systemId', size='is-small')
        b-field(label='Sigla')
          b-input(v-model='systemAcronym', size='is-small')
        b-field(label='Descrição')
          b-input(v-model='systemName', size='is-small')
        b-field(label='Notas')
          b-input(maxlength='255', type='textarea', v-model='notes')
        b-field
          b-switch(v-model='active') Ativo
    .card-footer.tw-px-6.tw-pb-4.tw-flex.tw-justify-end
      .wrapper-buttons
        b-button.tw-mr-4(type='is-danger', @click='$emit("close")') Cancelar
        b-button(type='is-primary', @click='proccessSystemRequest') Salvar
</template>

<script>
import { mapState } from 'vuex'
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
        return this.$store.state.selectedSystem.systemId
      },
      set(value) {
        this.$store.commit('changeSelectedSystemSystemId', value)
      },
    },
    systemAcronym: {
      get() {
        return this.$store.state.selectedSystem.systemAcronym
      },
      set(value) {
        this.$store.commit('changeSelectedSystemSystemAcronym', value)
      },
    },
    systemName: {
      get() {
        return this.$store.state.selectedSystem.systemName
      },
      set(value) {
        this.$store.commit('changeSelectedSystemSystemName', value)
      },
    },
    notes: {
      get() {
        return this.$store.state.selectedSystem.notes
      },
      set(value) {
        this.$store.commit('changeSelectedSystemNotes', value)
      },
    },
    active: {
      get() {
        return this.$store.state.selectedSystem.active
      },
      set(value) {
        this.$store.commit('changeSelectedSystemActive', value)
      },
    },
    ...mapState({
      // selectedSystem: (state) => state.selectedSystem,
      systemModalMode: (state) => state.systemModalMode,
    }),
  },
  watch: {},
  mounted() {},
  created() {},
  methods: {
    async proccessSystemRequest() {
      if (this.systemModalMode === 'save') {
        const status = await this.$store.dispatch('saveSystem')
        if (status === 200) {
          this.$store.dispatch('getSystems')
          this.$emit('close')
        }
      }
      if (this.systemModalMode === 'edit') {
        const status = await this.$store.dispatch('editSystem')
        if (status === 200) {
          this.$store.dispatch('getSystems')
          this.$emit('close')
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
