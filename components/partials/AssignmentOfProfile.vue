<template lang="pug">
.assignment-of-profile-wrapper.tw-mt-8.tw-px-8
  b-modal(v-model='isModalActiveUpdate')
    template(#default='props')
      confirmation-modal(@close='props.close', :onConfirm='update')
  b-modal(v-model='isModalActiveProfile', :on-cancel='handleCancelOperation')
    template(#default='props')
      confirmation-modal(
        @close='props.close',
        :onConfirm='handleSetProfile',
        :onCancel='handleCancelOperation'
      )
  .fields.tw-mb-4
    auto-complete(:selectFn='handleSetSelectedCollaborator')

  profile-form(v-if='!!selectedCollaborator')
  .update-buttons.tw-flex.tw-justify-center
    b-button.tw-mx-2.tw-my-4.tw-w-32(
      type='is-success',
      @click='isModalActiveUpdate = true'
    ) {{ $t("update") }}
  .view-profile
    .button-wrapper.tw-flex.tw-justify-end
      b-button.tw-w-24(
        v-if='!!selectedCollaborator',
        type='is-primary',
        :disabled='isEnableToCreate',
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
          b-field(v-if='props.row.active')
            b-switch(
              size='is-small',
              :value='props.row.active',
              :ref='props.row.profileId',
              @input='(active) => { handleChangeProfile(active, props.row.profileId); }'
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
          .actions-wrapper.tw-flex.tw-justify-center.items-center
            b-button.p-2.tw-text-white.tw-rounded.tw-mx-2(
              type='is-danger',
              @click='handleRemovePointOfSale(props.row.pointOfSaleId)'
            ) remover
            span.tw-cursor-pointer.tw-flex.tw-items-center(
              class='hover:tw-text-primary'
            )
              b-icon(icon='eye', size='')
</template>

<script>
import setMenu from '@/mixins/setMenu'
import { mapState, mapMutations, mapActions } from 'vuex'
export default {
  name: 'AssignmentOfProfile',
  components: {
    ProfileForm: () => import('@/components/partials/ProfileForm'),
    ConfirmationModal: () => import('@/components/partials/ConfirmationModal'),
    StandardTable: () => import('@/components/StandardTable'),
  },
  mixins: [setMenu],
  props: {},
  data() {
    return {
      isModalActiveUpdate: false,
      isModalActiveProfile: false,
      currentProfile: {
        profileId: '',
        active: false,
      },
    }
  },
  computed: {
    ...mapState(['selectedCollaborator', 'collaborators', 'isLoading']),

    isEnableToCreate() {
      return this.selectedCollaborator.profiles
        .map((profile) => profile.active)
        .some((active) => active)
    },

    searchCollaboratorName: {
      get() {
        return this.$store.state.searchCollaboratorName
      },
      set(value) {
        this.setSearchCollaboratorName(value)
      },
    },
  },
  watch: {},
  async mounted() {
    if (this.searchCollaboratorName.length >= 3) {
      await this.getAvailableCollaborators()
    }
  },
  created() {},
  methods: {
    ...mapMutations(['setSearchCollaboratorName', 'setSelectedCollaborator']),
    ...mapActions([
      'getAvailableCollaborators',
      'setProfileState2Collaborator',
      'handleUpdateProfile',
      'removePointOfSale2Collaborator',
    ]),

    handleChangeProfile(active, profileId) {
      this.isModalActiveProfile = true
      this.currentProfile = { active, profileId }
    },

    async handleSetProfile() {
      const status = await this.setProfileState2Collaborator({
        ...this.currentProfile,
      })
      if (status !== 200) {
        this.handleCancelOperation()
      }
    },
    async handleRemovePointOfSale(pointOfSaleId) {
      await this.removePointOfSale2Collaborator({ pointOfSaleId })
    },

    goToPartTwo() {
      this.setPartial('AssignmentOfProfile2')
    },
    goToPartThree() {
      this.setPartial('AssignmentOfProfile3')
    },
    update() {
      this.handleUpdateProfile()
    },
    handleCancelOperation() {
      this.$refs[this.currentProfile.profileId].value = !this.currentProfile
        .active
      this.$refs[this.currentProfile.profileId].computedValue = !this
        .currentProfile.active
    },
    handleSetSelectedCollaborator(collaborator) {
      this.setSelectedCollaborator(collaborator)
      this.searchCollaboratorName = collaborator.userName
    },
  },
}
</script>

<style lang="scss" scoped>
.assignment-of-profile-wrapper {
}
</style>
