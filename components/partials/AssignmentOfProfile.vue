<template lang="pug">
.assignment-of-profile-wrapper.tw-mt-8.tw-px-8
  .fields.tw-mb-4
    b-field(label='Find by user')
      b-autocomplete(v-model='searchProfileId', :data='userProfilesId')
  profile-form
  .update-buttons.tw-flex.tw-justify-center
    b-button.tw-mx-2.tw-my-4.tw-w-32(type='is-success') {{ $t("update") }}
  .view-profile
    .button-wrapper.tw-flex.tw-justify-end
      b-button.tw-w-24(type='is-primary') {{ $t("add") }}
    standard-table(
      v-if='!!selectedProfile',
      :data='selectedProfile && selectedProfile.profiles'
    )
      b-table-column(
        field='profileId',
        :label='$t("profileCode")',
        v-slot='props'
      )
        span.tw-text-xs {{ props.row.profileId }}
      b-table-column(
        field='profileName',
        :label='$t("profileDescription")',
        v-slot='props'
      )
        span.tw-text-xs {{ props.row.profileName }}
      b-table-column(
        field='beginTermDate',
        :label='$t("initialDate")',
        v-slot='props'
      )
        span.tw-text-xs {{ props.row.beginTermDate }}
      b-table-column(
        field='endTermDate',
        :label='$t("finalDate")',
        v-slot='props'
      )
        span.tw-text-xs {{ props.row.endTermDate }}
      b-table-column(
        ,
        :label='$t("operation")',
        v-slot='props',
        :centered='true'
      )
        .actions-wrapper.tw-flex.tw-justify-center
          b-field
            b-switch(size='is-small', v-model='props.row.active')
          span.tw-cursor-pointer(class='hover:tw-text-primary')
            b-icon(icon='eye', size='')
    .view-sales.tw-mt-6
      .button-wrapper.tw-flex.tw-justify-end
        b-button.tw-w-24(type='is-primary') {{ $t("add") }}
      standard-table(
        v-if='!!selectedProfile',
        :data='selectedProfile && selectedProfile.pointOfSales'
      )
        b-table-column(
          field='sales_description',
          :label='$t("salesName")',
          v-slot='props',
          width='80%'
        )
          span.tw-text-xs {{ props.row.pointOfSale }}
        b-table-column(
          :label='$t("operation")',
          v-slot='props',
          :centered='true'
        )
          .actions-wrapper.tw-flex.tw-justify-center
            b-field
              b-switch(
                size='is-small',
                true-value='on',
                false-value='off',
                v-model='props.row.operation'
              ) {{ props.row.operation }}
            span.tw-cursor-pointer(class='hover:tw-text-primary')
              b-icon(icon='eye', size='')
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'AssignmentOfProfile',
  components: {
    ProfileForm: () => import('@/components/partials/ProfileForm'),
    StandardTable: () => import('@/components/StandardTable'),
  },
  props: {},
  data() {
    return {
      localProfile: {},
    }
  },
  computed: {
    ...mapState({
      selectedProfile: (state) => state.selectedProfile,
      userProfiles: (state) => state.userProfiles,
    }),
    ...mapGetters(['userProfilesId']),
    searchProfileId: {
      get() {
        return this.$store.state.searchProfileId
      },
      set(value) {
        this.$store.commit('setSearchProfileId', value)
      },
    },
  },
  watch: {
    async searchProfileId(newProfileId, oldProfileId) {
      if (newProfileId.length >= 3) {
        await this.$store.dispatch('getAssignProfile')
      }
    },
  },
  async mounted() {
    if (this.searchProfileId.length >= 3) {
      await this.$store.dispatch('getAssignProfile')
    }
  },
  created() {},
  methods: {},
}
</script>

<style lang="scss" scoped>
.assignment-of-profile-wrapper {
}
</style>
