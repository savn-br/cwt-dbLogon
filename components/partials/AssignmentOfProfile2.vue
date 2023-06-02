<template lang="pug">
#assignmentOfProfile3.assignment-of-profile3-wrapper.tw-mt-8.tw-px-8
  back-button.tw-w-24(partialComponent='AssignmentOfProfile')
  //- b-field(label='Find by profileName')
  //-   b-autocomplete(v-model='searchProfileId', :data='availableProfilesName')
  standard-table(v-if='availableProfiles.length', :data='availableProfiles')
    b-table-column(
      width='120px',
      v-slot='props',
      field='profileId',
      :label='$t("profileCode")'
    )
      span.tw-text-xs {{ props.row.profileId }}
    b-table-column(
      v-slot='props',
      field='description',
      :label='$t("profileDescription")'
    )
      span.tw-text-xs {{ props.row.description }}
    b-table-column(
      :label='$t("operation")',
      field='active',
      :centered='true',
      v-slot='props'
    )
      .operation-wrapper
        b-checkbox(
          v-if='props.row.profileId !== profileIdSelected',
          @input='(active) => { addProfile2Collaborator(active, props.row.profileId); }'
        )
          span.tw-text-xs {{ $t("select") }}
        span.tw-cursor-pointer(
          class='hover:tw-text-primary',
          @click='selectProfile(props.row.profileId)'
        )
          b-icon(icon='sitemap')
</template>

<script>
import setMenu from '@/mixins/setMenu'
import { mapMutations, mapActions, mapState, mapGetters } from 'vuex'
export default {
  name: 'AssignmentOfProfile3',
  components: {
    StandardTable: () => import('@/components/StandardTable'),
  },
  mixins: [setMenu],
  props: {},
  data() {
    return {
      profileIdSelected: -1,
    }
  },
  computed: {
    ...mapGetters(['availableProfilesName', 'isProfileActive2Collaborator']),
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
    ...mapActions(['getAvailableProfiles', 'setProfile2Collaborator']),

    selectProfile(profileId) {
      this.setBackProfileSearchPartial('AssignmentOfProfile2')
      this.setSelectedProfileId(profileId)
      this.setPartial('ProfileSearch2')
    },
    async addProfile2Collaborator(active, profileId) {
      if (active) {
        this.profileIdSelected = profileId
        await this.setProfile2Collaborator({ profileId })
        this.setPartial('AssignmentOfProfile')
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.assignment-of-profile3-wrapper {
}
</style>

<style lang="scss">
.assignment-of-profile3-wrapper {
  input.input {
    height: px2rem(25);
  }
}
</style>
