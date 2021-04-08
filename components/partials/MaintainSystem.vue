<template lang="pug">
#maintainSystem.maintain-system-wrapper.tw-mt-8.tw-px-8
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
      :searchable='true',
      :label='$t("systemAcronym")'
    )
      span.tw-text-xs {{ props.row.systemAcronym }}
    b-table-column(
      v-slot='props',
      field='systemName',
      :searchable='true',
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
          b-icon.tw-mr-2(icon='account-details')
        span.tw-cursor-pointer(class='hover:tw-text-primary')
          b-icon.tw-mr-2(icon='clipboard-text')
        span.tw-cursor-pointer(class='hover:tw-text-primary')
          b-icon(icon='eye')
</template>

<script>
import { mapState } from 'vuex'
import changeMenu from '~/mixins/changeMenu'
export default {
  name: 'MaintainSystem',
  components: {
    StandardTable: () => import('@/components/StandardTable'),
    MaintainSystemModal: () =>
      import('@/components/partials/MaintainSystemModal'),
  },
  mixins: [changeMenu],
  props: {},
  data() {
    return {
      isModalActive: false,
      profileDescription: require('@/jsons/profile-description-table-data.json'),
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
    goToModule(system) {
      this.$store.commit('changeSelectedSystem', system)
      this.changePartial('MaintainSystem2')
    },
    createSytem() {
      this.$store.commit('changeSystemModalMode', 'save')
      this.$store.commit('changeSelectedSystem', {})
      this.isModalActive = true
    },
    editSystem(system) {
      this.$store.commit('changeSystemModalMode', 'edit')
      this.$store.commit('changeSelectedSystem', system)
      this.isModalActive = true
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
