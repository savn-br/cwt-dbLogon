<template lang="pug">
#maintainSystemModal2.maintain-system-modal2-wrapper
  .card
    .card-header
    .card-content
      form.tw-grid(name='perfil')
        b-field(label='Código do Módulo')
          b-input(v-model='moduleId', size='is-small')
        b-field(label='Sigla')
          b-input(v-model='moduleAcronym', size='is-small')
        b-field(label='Descrição')
          b-input(v-model='moduleName', size='is-small')
        b-field(label='Notas')
          b-input(maxlength='255', type='textarea', v-model='notes')
        b-field
          b-switch(v-model='active') Ativo
    .card-footer.tw-px-6.tw-pb-4.tw-flex.tw-justify-end
      .wrapper-buttons
        b-button.tw-mr-4(type='is-danger', @click='$emit("close")') Cancelar
        b-button(type='is-primary', @click='proccessModuleRequest') Salvar
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'MaintainSystemModal2',
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
      moduleModalMode: (state) => state.moduleModalMode,
    }),
    moduleId: {
      get() {
        return this.$store.state.selectedModule.moduleId
      },
      set(value) {
        this.$store.commit('changeSelectedModuleModuleId', value)
      },
    },
    moduleAcronym: {
      get() {
        return this.$store.state.selectedModule.moduleAcronym
      },
      set(value) {
        this.$store.commit('changeSelectedModuleModuleAcronym', value)
      },
    },
    moduleName: {
      get() {
        return this.$store.state.selectedModule.moduleName
      },
      set(value) {
        this.$store.commit('changeSelectedModuleModuleName', value)
      },
    },
    notes: {
      get() {
        return this.$store.state.selectedModule.notes
      },
      set(value) {
        this.$store.commit('changeSelectedModuleNotes', value)
      },
    },
    active: {
      get() {
        return this.$store.state.selectedModule.active
      },
      set(value) {
        this.$store.commit('changeSelectedModuleActive', value)
      },
    },
  },
  watch: {},
  mounted() {},
  created() {},
  methods: {
    async proccessModuleRequest() {
      if (this.moduleModalMode === 'save') {
        const status = await this.$store.dispatch('saveModule')
        if (status === 200) {
          this.$store.dispatch('getModules')
          this.$emit('close')
        }
      }
      if (this.moduleModalMode === 'edit') {
        const status = await this.$store.dispatch('editModule')
        if (status === 200) {
          this.$store.dispatch('getModules')
          this.$emit('close')
        }
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.maintain-system-modal2-wrapper {
  max-width: px2rem(875);
  margin: 0 auto;
  form {
    grid-template-columns: repeat(auto-fill, minmax(px2rem(280), 1fr));
    grid-column-gap: px2rem(15);
  }
}
</style>

<style lang="scss">
.maintain-system-modal2-wrapper {
  label {
    font-size: 0.75rem;
  }
}
</style>
