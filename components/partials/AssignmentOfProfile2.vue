<template lang="pug">
#assignmentOfProfile2.assignment-of-profile2-wrapper.tw-mt-8.tw-px-8
  standard-table(:data='profileDescription')
    b-table-column(
      v-slot='props',
      field='profile_code',
      :searchable='true',
      :label='$t("profileCode")'
    )
      span.tw-text-xs {{ props.row.profile_code }}
    b-table-column(
      v-slot='props',
      field='profile_description',
      :searchable='true',
      :label='$t("profileDescription")'
    )
      span.tw-text-xs {{ props.row.profile_description }}
    b-table-column(
      :label='$t("operation")',
      field='active_operation',
      :centered='true',
      v-slot='props'
    )
      .operation-wrapper
        b-checkbox(v-model='props.row.active_operation')
          span.tw-text-xs {{ $t("active") }}
        a(href='#')
          b-icon(icon='account-details')
</template>

<script>
import { mapMutations, mapActions } from 'vuex'
export default {
  name: 'AssignmentOfProfile2',
  components: {
    StandardTable: () => import('@/components/StandardTable'),
  },
  props: {},
  data() {
    return {
      profileDescription: require('@/jsons/profile-description-table-data.json'),
    }
  },
  computed: {
    searchProfileId: {
      get() {
        return this.$store.state.searchProfileId
      },
      set(value) {
        this.setSearchProfileId(value)
      },
    },
  },
  watch: {},
  async mounted() {
    await this.getAvailableProfiles()
  },
  created() {},
  methods: {
    ...mapMutations(['setSearchProfileId']),
    ...mapActions(['getAvailableProfiles']),
  },
}
</script>

<style lang="scss" scoped>
.assignment-of-profile2-wrapper {
}
</style>

<style lang="scss">
.assignment-of-profile2-wrapper {
  input.input {
    height: px2rem(25);
  }
}
</style>
