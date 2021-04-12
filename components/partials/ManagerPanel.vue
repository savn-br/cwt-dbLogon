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
      b-button(
        type='is-primary',
        size='is-small',
        @click='atribuir(props.row.userId)'
      ) {{ $t("assignProfile") }}
</template>

<script>
import { mapState } from 'vuex'
import changeMenu from '@/mixins/changeMenu'
export default {
  name: 'ManagerPanel',
  components: { StandardTable: () => import('@/components/StandardTable') },
  mixins: [changeMenu],
  props: {},
  data() {
    const data = Object.assign(require('@/jsons/assignment-profile-data.json'))
    return {
      data,
    }
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
    async atribuir(userId) {
      await this.$store.commit('changeSearchProfileId', userId)
      this.changePartial('AssignmentOfProfile')
    },
  },
}
</script>

<style lang="scss" scoped>
.manager-panel-wrapper {
}
</style>
