<template lang="pug">
#assignmentOfProfile2.assignment-of-profile2-wrapper.tw-mt-8.tw-px-8
  back-button(partialComponent='AssignmentOfProfile')
  b-field(label='Find by profileName')
    b-autocomplete(v-model='searchProfileId', :data='availablesProfilesName')
    span.tw-ml-2(v-if='searchProfileLoading') loading ...
  standard-table(v-if='availableProfiles.length', :data='availableProfiles')
    b-table-column(
      v-slot='props',
      field='profileId',
      :searchable='true',
      :label='$t("profileCode")'
    )
      span.tw-text-xs {{ props.row.profileId }}
    b-table-column(
      v-slot='props',
      field='profileName',
      :searchable='true',
      :label='$t("profileDescription")'
    )
      span.tw-text-xs {{ props.row.profileName }}
    b-table-column(
      :label='$t("operation")',
      field='active',
      :centered='true',
      v-slot='props'
    )
      .operation-wrapper
        b-checkbox(
          :value='props.row.active',
          @input='(active) => { addProfile2Collaborator(active, props.row.profileId); }'
        )
          span.tw-text-xs {{ $t("active") }}
        a(href='#')
          b-icon(icon='account-details')
</template>

<script>
import { mapMutations, mapActions, mapState, mapGetters } from 'vuex'
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
    ...mapGetters({
      availablesProfilesName: 'availablesProfilesName',
    }),
    ...mapState({
      availableProfiles: (state) => state.availableProfiles,
      searchProfileLoading: (state) => state.searchProfileLoading,
    }),
    searchProfileId: {
      get() {
        return this.$store.state.searchProfileId
      },
      set(value) {
        this.setSearchProfileId(value)
      },
    },
  },
  watch: {
    async searchProfileId(newSearchProfileId) {
      if (newSearchProfileId.length >= 3) {
        await this.getAvailableProfiles()
      }
    },
  },
  async mounted() {
    if (this.searchProfileId.length >= 3) {
      await this.getAvailableProfiles()
    }
  },
  created() {},
  methods: {
    ...mapMutations(['setSearchProfileId']),
    ...mapActions(['getAvailableProfiles', 'setProfile2Collaborator']),

    async addProfile2Collaborator(active, profileId) {
      if (active) await this.setProfile2Collaborator({ profileId })
    },
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
