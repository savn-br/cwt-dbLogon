<template lang="pug">
#maintainProfile.maintain-profile-wrapper.tw-mt-8.tw-px-8
  b-modal(v-model='isModalActive')
    template(#default='props')
      maintain-profile-modal(@close='props.close')
  .buttons-wrapper.tw-flex.tw-justify-end.tw-mb-2
    b-button(type='is-primary', @click='isModalActive = true') {{ $t("add") }}
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
      b-checkbox(v-model='props.row.active')
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
import { mapActions, mapState } from 'vuex'
import setMenu from '@/mixins/setMenu'
export default {
  name: 'MaintainProfile',
  components: {
    MaintainProfileModal: () =>
      import('@/components/partials/MaintainProfileModal'),
  },
  mixins: [setMenu],
  props: {},
  data() {
    return {
      isModalActive: false,
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
  },
  created() {},
  methods: {
    ...mapActions(['getAllProfiles']),

    handleEditProfile(profileId) {
      console.log(profileId)
    },
    handleEditTransactions(profileId) {
      console.log(profileId)
      this.setPartial('MaintainProfile2')
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
