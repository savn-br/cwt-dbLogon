<template lang="pug">
.manager-panel-wrapper.tw-mt-8.tw-px-8
  standard-table(
    :data='requests',
    :bordered='true',
    :narrowed='true',
    :striped='true'
  )
    b-table-column(field='date', :label='$t("date")', v-slot='props')
      span.tw-text-xs {{ props.row.date }}
    b-table-column(field='action', :label='$t("action")', v-slot='props')
      span.tw-text-xs {{ props.row.action }}
    b-table-column(field='user', :label='$t("user")', v-slot='props')
      span.tw-text-xs {{ props.row.userId }}
    b-table-column(
      field='colaborator',
      :label='$t("collaborator")',
      v-slot='props'
    )
      span.tw-text-xs {{ props.row.userName }}
    b-table-column(:label='$t("assign")', v-slot='props', :centered='true')
      b-button.tw-w-24(
        type='is-primary',
        size='is-small',
        @click='attribute(props.row.userName, props.row.userId)'
      ) {{ $t("assignProfile") }}
</template>

<script>
import { mapState, mapActions } from 'vuex'
import setMenu from '@/mixins/setMenu'
export default {
  name: 'ManagerPanel',
  components: { StandardTable: () => import('@/components/StandardTable') },
  mixins: [setMenu],
  props: {},
  data() {
    return {}
  },
  computed: {
    ...mapState({
      requests: (state) => state.requests,
    }),
  },
  watch: {},
  mounted() {
    this.$store.dispatch('getRequests')
  },
  created() {},
  methods: {
    ...mapActions(['getAvailableCollaborator']),
    async attribute(userName, userId) {
      await this.getAvailableCollaborator({ userId })
      this.$store.commit('setSearchCollaboratorName', userName)
      this.setPartial('AssignmentOfProfile')
    },
  },
}
</script>

<style lang="scss" scoped>
.manager-panel-wrapper {
}
</style>
