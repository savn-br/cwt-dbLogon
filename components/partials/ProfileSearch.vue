<template lang="pug">
#searchProfile.search-profile-wrapper.tw-mt-8.tw-px-8
  b-field(:label='$t("findByProfile")')
    b-autocomplete(v-model='searchProfileId', :data='availableProfilesName')
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
        span.tw-cursor-pointer(
          class='hover:tw-text-primary',
          @click='selectProfile(props.row.profileId)'
        )
          b-icon(icon='account-details')
</template>

<script>
import setMenu from '@/mixins/setMenu'
import { mapMutations, mapActions, mapState, mapGetters } from 'vuex'
export default {
  name: 'SearchProfile',
  components: {
    StandardTable: () => import('@/components/StandardTable'),
  },
  mixins: [setMenu],
  props: {},
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['availableProfilesName']),
    ...mapState(['availableProfiles', 'searchProfileLoading']),
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
    ...mapMutations([
      'setSearchProfileId',
      'setSelectedProfileId',
      'setBackProfileSearchPartial',
    ]),
    ...mapActions(['getAvailableProfiles']),

    selectProfile(profileId) {
      this.setBackProfileSearchPartial('ProfileSearch')
      this.setSelectedProfileId(profileId)
      this.setPartial('ProfileSearch2')
    },
  },
}
</script>

<style lang="scss" scoped>
.search-profile-wrapper {
}
</style>

<style lang="scss">
.search-profile-wrapper {
  input.input {
    height: px2rem(25);
  }
}
</style>
