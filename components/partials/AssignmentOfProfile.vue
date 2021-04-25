<template lang="pug">
.assignment-of-profile-wrapper.tw-mt-8.tw-px-8
  .fields.tw-mb-4
    b-field.tw-mx-2(:label='$t("findByUser")')
      b-autocomplete(v-model='searchCollaboratorId', :data='collaboratorsId')
      span.tw-ml-2(v-show='searchCollaboratorLoading') loading ...
  profile-form(v-if='!!selectedCollaborator')
  .update-buttons.tw-flex.tw-justify-center
    b-button.tw-mx-2.tw-my-4.tw-w-32(type='is-success', @click='update') {{ $t("update") }}
  .view-profile
    .button-wrapper.tw-flex.tw-justify-end
      b-button.tw-w-24(
        v-if='!!selectedCollaborator',
        type='is-primary',
        @click='goToPartTwo'
      ) {{ $t("add") }}
    standard-table(
      v-if='!!selectedCollaborator',
      :data='selectedCollaborator && selectedCollaborator.profiles'
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
            b-switch(
              size='is-small',
              :value='props.row.active',
              @input='(active) => { setProfile(active, props.row.profileId); }'
            )
          span.tw-cursor-pointer(class='hover:tw-text-primary')
            b-icon(icon='eye', size='')
    .view-sales.tw-mt-6
      .button-wrapper.tw-flex.tw-justify-end
        b-button.tw-w-24(
          v-if='!!selectedCollaborator',
          @click='goToPartThree',
          type='is-primary'
        ) {{ $t("add") }}
      standard-table(
        v-if='!!selectedCollaborator',
        :data='selectedCollaborator && selectedCollaborator.pointOfSales'
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
                :value='props.row.active',
                @input='(active) => { setSalesPoint(active, props.row.pointOfSaleId); }'
              )
            span.tw-cursor-pointer(class='hover:tw-text-primary')
              b-icon(icon='eye', size='')
</template>

<script>
import setMenu from '@/mixins/setMenu'
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
export default {
  name: 'AssignmentOfProfile',
  components: {
    ProfileForm: () => import('@/components/partials/ProfileForm'),
    StandardTable: () => import('@/components/StandardTable'),
  },
  mixins: [setMenu],
  props: {},
  data() {
    return {}
  },
  computed: {
    ...mapState(['selectedCollaborator', 'searchCollaboratorLoading']),
    ...mapGetters(['collaboratorsId']),

    searchCollaboratorId: {
      get() {
        return this.$store.state.searchCollaboratorId
      },
      set(value) {
        this.setSearchCollaboratorId(value)
      },
    },
  },
  watch: {
    async searchCollaboratorId(newCollaboratorId) {
      if (newCollaboratorId.length >= 3) {
        await this.getAvailableCollaborators()
      }
    },
  },
  async mounted() {
    if (this.searchCollaboratorId.length >= 3) {
      await this.getAvailableCollaborators()
    }
  },
  created() {},
  methods: {
    ...mapMutations(['setSearchCollaboratorId']),
    ...mapActions([
      'getAvailableCollaborators',
      'setProfileState2Collaborator',
      'setPointOfSales2Collaborator',
      'updateProfile',
    ]),

    async setProfile(active, profileId) {
      await this.setProfileState2Collaborator({ active, profileId })
    },
    async setSalesPoint(active, pointOfSaleId) {
      await this.setPointOfSales2Collaborator({ active, pointOfSaleId })
    },

    goToPartTwo() {
      this.setPartial('AssignmentOfProfile2')
    },
    goToPartThree() {
      this.setPartial('AssignmentOfProfile3')
    },
    update() {
      this.updateProfile()
    },
  },
}
</script>

<style lang="scss" scoped>
.assignment-of-profile-wrapper {
}
</style>
