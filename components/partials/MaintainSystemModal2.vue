<template lang="pug">
#maintainSystemModal2.maintain-system-modal2-wrapper
  .card-l
    .card-header
    .card-content
      form.form.tw-grid(name='perfil')
        b-field(:label='$t("moduleCode")')
          b-input(v-model='moduleId', size='is-small')
        b-field(:label='$t("moduleAcronym")')
          b-input(v-model='moduleAcronym', size='is-small', maxlength='7')
        b-field(:label='$t("description")')
          b-input(v-model='moduleName', size='is-small', maxlength='40')
        b-field(:label='$t("notes")')
          b-input(
            maxlength='512',
            size='is-small',
            type='textarea',
            v-model='notes'
          )
        b-field
          b-switch(v-model='active') {{ $t("active") }}
    .card-footer.tw-px-6.tw-pb-4.tw-flex.tw-justify-end
      .wrapper-buttons
        b-button.tw-mr-4(type='is-danger', @click='$emit("close")') {{ $t("cancel") }}
        b-button(type='is-primary', @click='proccessModuleRequest') {{ $t("save") }}
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
export default {
  name: 'MaintainSystemModal2',
  components: {},
  props: {},
  data() {
    return {}
  },
  computed: {
    ...mapState(['moduleModalMode', 'selectedModule']),
    moduleId: {
      get() {
        return this.selectedModule.moduleId
      },
      set(value) {
        this.setSelectedModuleTerm({ key: 'moduleId', value })
      },
    },
    moduleAcronym: {
      get() {
        return this.selectedModule.moduleAcronym
      },
      set(value) {
        this.setSelectedModuleTerm({ key: 'moduleAcronym', value })
      },
    },
    moduleName: {
      get() {
        return this.selectedModule.moduleName
      },
      set(value) {
        this.setSelectedModuleTerm({ key: 'moduleName', value })
      },
    },
    notes: {
      get() {
        return this.selectedModule.notes
      },
      set(value) {
        this.setSelectedModuleTerm({ key: 'notes', value })
      },
    },
    active: {
      get() {
        return this.selectedModule.active
      },
      set(value) {
        this.setSelectedModuleTerm({ key: 'active', value })
      },
    },
  },
  watch: {},
  mounted() {},
  created() {},
  methods: {
    ...mapMutations(['setSelectedModuleTerm']),
    ...mapActions(['saveModule', 'getModules', 'editModule']),

    async proccessModuleRequest() {
      this.$emit('close')
      if (this.moduleModalMode === 'save') {
        const status = await this.saveModule()
        if (status === 200) {
          this.getModules()
        }
      }
      if (this.moduleModalMode === 'edit') {
        const status = await this.editModule()
        if (status === 200) {
          this.getModules()
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
