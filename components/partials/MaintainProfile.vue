<template lang="pug">
#maintainProfile.maintain-profile-wrapper.tw-mt-8.tw-px-8
  b-modal(v-model='isModalActive2', :on-cancel='handleCancelOperation')
    template(#default='props')
      confirmation-modal(
        @close='props.close',
        :onConfirm='handleUpdateMaintainProfile',
        :onCancel='handleCancelOperation'
      )
  b-modal(v-model='isModalActive')
    template(#default='props')
      maintain-profile-modal(@close='props.close')
  .buttons-wrapper.tw-flex.tw-justify-end.tw-mb-2
    b-button(type='is-primary', @click='handleCreateProfile') {{ $t("add") }}
  standard-table(:data='maintainAllProfiles')
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
      v-slot='props',
      field='active',
      :label='$t("active")',
      :centered='true'
    )
      b-checkbox(
        :value='props.row.active',
        :ref='props.row.profileId',
        @input='(active) => { handleChangeState(active, props.row.profileId); }'
      )
        span.tw-text-xs {{ $t("active") }}
    b-table-column(
      :label='$t("operation")',
      field='active_operation',
      :centered='true',
      v-slot='props'
    )
      .operation-wrapper
        span.tw-cursor-pointer(
          class='hover:tw-text-primary',
          @click='handleEditProfile(props.row.profileId)'
        )
          b-icon.tw-mr-2(icon='pencil')
        span.tw-cursor-pointer(
          class='hover:tw-text-primary',
          @click='handleEditTransactions(props.row.profileId)'
        )
          b-icon(icon='account-details')
</template>

<script>
import { mapActions, mapState, mapMutations } from 'vuex'
import setMenu from '@/mixins/setMenu'
export default {
  name: 'MaintainProfile',
  components: {
    MaintainProfileModal: () =>
      import('@/components/partials/MaintainProfileModal'),
    ConfirmationModal: () => import('@/components/partials/ConfirmationModal'),
  },
  mixins: [setMenu],
  props: {},
  data() {
    return {
      isModalActive: false,
      isModalActive2: false,
      currentProfile: {
        profileId: '',
        active: false,
      },
    }
  },
  computed: {
    ...mapState({
      maintainAllProfiles: (state) => state.maintainAllProfiles,
    }),
  },
  watch: {},
  async mounted() {
    await this.getAllProfiles()
    await this.getAllParentProfiles()
  },
  created() {},
  methods: {
    ...mapActions([
      'getAllProfiles',
      'getAllParentProfiles',
      'getMaintainProfile',
      'updateMaintainProfile',
    ]),
    ...mapMutations([
      'clearMaintainProfile',
      'setMaintainProfileMode',
      'setMaintainProfileTerm',
    ]),

    async handleEditProfile(profileId) {
      this.setMaintainProfileMode('edit')
      await this.getMaintainProfile({ profileId })
      this.isModalActive = true
    },
    async handleEditTransactions(profileId) {
      await this.getMaintainProfile({ profileId })
      this.setPartial('MaintainProfile2')
    },
    handleCreateProfile() {
      this.setMaintainProfileMode('save')
      this.clearMaintainProfile()
      this.isModalActive = true
    },
    async handleChangeState(active, profileId) {
      this.isModalActive2 = true
      this.currentProfile = { profileId, active }
      await this.getMaintainProfile({ profileId })
      this.setMaintainProfileTerm({ term: 'active', value: active })
    },
    handleCancelOperation() {
      this.$refs[this.currentProfile.profileId].value = !this.currentProfile
        .active
      this.$refs[this.currentProfile.profileId].computedValue = !this
        .currentProfile.active
    },
    async handleUpdateMaintainProfile() {
      const status = await this.updateMaintainProfile()
      if (status !== 200) {
        this.handleCancelOperation()
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.maintain-profile-wrapper {
}
</style>

<style lang="scss">
.maintain-profile-wrapper {
  .control.is-clearfix {
    width: 100%;
  }
  input.input {
    height: px2rem(25);
  }
}
</style>
