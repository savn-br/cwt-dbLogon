<template lang="pug">
#searchProfile.search-profile-wrapper.tw-mt-8.tw-px-8
  //- b-field(:label='$t("findByProfile")')
  //-   b-autocomplete(v-model='searchProfileId', :data='availableProfilesName')
  standard-table(:data='availableProfiles')
    b-table-column(
      width='120px',
      v-slot='props',
      field='profileId',
      :label='$t("profileCode")'
    )
      span.tw-text-xs {{ props.row.profileId }}
    b-table-column(
      v-slot='props',
      field='profileName',
      :label='$t("profileDescription")'
    )
      span.tw-text-xs {{ props.row.profileName }}
    b-table-column(
      :label='$t("operation")',
      width='120px',
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
    ...mapState(['availableProfiles']),
    // searchProfileId: {
    //   get() {
    //     return this.$store.state.searchProfileId
    //   },
    //   set(value) {
    //     this.setSearchProfileId(value)
    //   },
    // },
  },
  async mounted() {
    await this.getAvailableProfiles()
  },
  created() {},
  methods: {
    ...mapMutations([
      // 'setSearchProfileId',
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
  label {
    font-size: 0.75rem;
  }
}
</style>
