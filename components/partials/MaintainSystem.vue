<template lang="pug">
#maintainSystem.maintain-system-wrapper.tw-mt-8.tw-px-8
  b-modal(v-model='isLogModalActive')
    template(#default='props')
      log-modal(@close='props.close')
  b-modal(v-model='NotesModalActive')
    template(#default='props')
      notes-modal(@close='props.close', :message='message')
  b-modal(v-model='isModalActive')
    template(#default='props')
      maintain-system-modal(@close='props.close')
  .buttons-wrapper.tw-flex.tw-justify-end.tw-mb-2
    b-button(type='is-primary', @click='createSytem') {{ $t("add") }}
  standard-table(:data='systems')
    b-table-column(v-slot='props', field='systemId', :label='$t("systemCode")')
      span.tw-text-xs {{ props.row.systemId }}
    b-table-column(
      v-slot='props',
      field='systemAcronym',
      :label='$t("systemAcronym")'
    )
      span.tw-text-xs {{ props.row.systemAcronym }}
    b-table-column(
      v-slot='props',
      field='systemName',
      :label='$t("description")'
    )
      span.tw-text-xs {{ props.row.systemName }}
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
          @click='editSystem(props.row)'
        )
          b-icon.tw-mr-2(icon='pencil')
        span.tw-cursor-pointer(
          class='hover:tw-text-primary',
          @click='goToModule(props.row)'
        )
<<<<<<< HEAD
          b-icon.tw-mr-2(icon='file-tree')

        span.tw-cursor-pointer(class='hover:tw-text-primary')
=======
          b-icon.tw-mr-2(icon='account-details')
        span.tw-cursor-pointer(
          class='hover:tw-text-primary',
          @click='handleShowNotes(props.row)'
        )
          b-icon.tw-mr-2(icon='clipboard-text')
        span.tw-cursor-pointer(
          class='hover:tw-text-primary',
          @click='(event) => handleShowLogModal(event, props.row)'
        )
>>>>>>> origin/develop_ronnas
          b-icon(icon='eye')
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import setMenu from '~/mixins/setMenu'
export default {
  name: 'MaintainSystem',
  components: {
    StandardTable: () => import('@/components/StandardTable'),
    MaintainSystemModal: () =>
      import('@/components/partials/MaintainSystemModal'),
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
      systems: (state) => state.systems,
    }),
  },
  watch: {},
  mounted() {
    this.$store.dispatch('getSystems')
  },
  created() {},
  methods: {
    ...mapMutations(['setLogState']),
    goToModule(system) {
      this.$store.commit('setSelectedSystem', system)
      this.setPartial('MaintainSystem2')
    },
    createSytem() {
      this.$store.commit('setSystemModalMode', 'save')
      this.$store.commit('setSelectedSystem', {})
      this.isModalActive = true
    },
    editSystem(system) {
      this.$store.commit('setSystemModalMode', 'edit')
      this.$store.commit('setSelectedSystem', system)
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
.maintain-system-wrapper {
}
</style>

<style lang="scss">
.maintain-system-wrapper {
  input.input {
    height: px2rem(25);
  }
}
</style>
