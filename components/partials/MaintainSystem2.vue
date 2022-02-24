<template lang="pug">
#maintainSystem2.maintain-system2-wrapper.tw-mt-8.tw-px-8
  b-modal(v-model='isLogModalActive')
    template(#default='props')
      log-modal(@close='props.close')
  b-modal(v-model='NotesModalActive')
    template(#default='props')
      notes-modal(@close='props.close', :message='message')
  back-button(partialComponent='MaintainSystem')
  .form.tw-grid.form-auto-fill(name='modulos')
    b-field.tw-mx-2(:label='$t("systemCode")')
      b-input(v-model='selectedSystem.systemId', size='is-small', disabled)
    b-field.tw-mx-2(:label='$t("systemAcronym")')
      b-input(
        v-model='selectedSystem.systemAcronym',
        size='is-small',
        disabled
      )
    b-field.tw-mx-2(:label='$t("description")')
      b-input(v-model='selectedSystem.systemName', size='is-small', disabled)
  b-modal(v-model='isModalActive')
    template(#default='props')
      maintain-system-modal-2(@close='props.close')
  .buttons-wrapper.tw-flex.tw-justify-end.tw-mb-2
    b-button(type='is-primary', @click='createModule') {{ $t("add") }}
  standard-table(:data='selectedSystem.modules')
    b-table-column(v-slot='props', field='moduleId', :label='$t("moduleCode")')
      span.tw-text-xs {{ props.row.moduleId }}
    b-table-column(
      v-slot='props',
      field='moduleAcronym',
      :label='$t("moduleAcronym")'
    )
      span.tw-text-xs {{ props.row.moduleAcronym }}
    b-table-column(
      v-slot='props',
      field='moduleName',
      :label='$t("description")'
    )
      span.tw-text-xs {{ props.row.moduleName }}
    b-table-column(
      v-slot='props',
      field='active',
      :label='$t("active")',
      :centered='true'
    )
      span(v-if='props.row.active')
        b-icon(icon='check')
      span(v-else)
        b-icon(icon='close')
    b-table-column(
      :label='$t("operation")',
      field='active_operation',
      :centered='true',
      v-slot='props'
    )
      .operation-wrapper
        span.tw-cursor-pointer(
          class='hover:tw-text-primary',
          @click='editModule(props.row)'
        )
          b-icon.tw-mr-2(icon='pencil')
        span.tw-cursor-pointer(
          class='hover:tw-text-primary',
          @click='goToTransaction(props.row)'
        )
          b-icon.tw-mr-2(icon='account-details')
        span.tw-cursor-pointer(
          class='hover:tw-text-primary',
          @click='handleShowNotes(props.row)'
        )
          b-icon.tw-mr-2(icon='account-details')
        span.tw-cursor-pointer(
          class='hover:tw-text-primary',
          @click='(event) => handleShowLogModal(event, props.row)'
        )
          b-icon(icon='eye')
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import setMenu from '~/mixins/setMenu'
export default {
  name: 'MaintainSystem2',
  components: {
    StandardTable: () => import('@/components/StandardTable'),
    MaintainSystemModal2: () =>
      import('@/components/partials/MaintainSystemModal2'),
    NotesModal: () => import('@/components/partials/NotesModal'),
    LogModal: () => import('@/components/partials/LogModal.vue'),
  },
  mixins: [setMenu],
  props: {},
  data() {
    return {
      isLogModalActive: false,
      isModalActive: false,
      NotesModalActive: false,
      message: '',
    }
  },
  computed: {
    ...mapState({
      selectedSystem: (state) => state.selectedSystem,
    }),
  },
  watch: {},
  mounted() {
    this.$store.dispatch('getModules')
  },
  created() {},
  methods: {
    ...mapMutations(['setLogState']),
    goToTransaction(module) {
      this.$store.commit('setSelectedModule', module)
      this.setPartial('MaintainSystem3')
    },
    createModule() {
      this.$store.commit('setModuleModalMode', 'save')
      this.$store.commit('setSelectedModule', {})
      this.isModalActive = true
    },
    editModule(module) {
      this.$store.commit('setModuleModalMode', 'edit')
      this.$store.commit('setSelectedModule', module)
      this.isModalActive = true
    },
    handleShowNotes(system) {
      this.message = system.notes
      this.NotesModalActive = true
    },
    handleShowLogModal(event, props) {
      event.stopPropagation()
      this.isLogModalActive = !this.isLogModalActive
      const { insertDate, userIdInsert, alterDate, userIdUpdate } = props
      this.setLogState({ insertDate, userIdInsert, alterDate, userIdUpdate })
    },
  },
}
</script>

<style lang="scss" scoped>
.maintain-system2-wrapper {
}
</style>
