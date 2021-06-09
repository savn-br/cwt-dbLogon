<template lang="pug">
.my-profile-wrapper.tw-mt-8.tw-px-8
  b-modal(v-model='isModalActive', :full-screen='false')
    template(#default='props')
      confirmation-modal(
        @close='props.close',
        :onConfirm='handleUpdateMyProfile'
      )
  user-form(:isDisabled='true')
  .update-buttons.tw-flex.tw-justify-center
    b-button.tw-w-24.tw-mx-2.tw-my-4(
      type='is-success',
      @click='isModalActive = true'
    ) {{ $t("update") }}
  collapse.tw-text-sm(
    v-if='!!profileAccess && !!profileAccess.profileName',
    :title='profileAccess.profileName'
  )
    component(
      v-for='(system,index) in profileAccess.details',
      is='SystemCollapse',
      :key='index',
      :system='system'
    )
  collapse.tw-text-sm(
    v-if='!!pointOfSales && pointOfSales.length',
    :title='$t("customerView")'
  )
    standard-table.tw-my-4(:data='pointOfSales', , :bordered='true')
      b-table-column(
        field='pointOfSale',
        :label='$t("salesPoint")',
        v-slot='props'
      )
        span.tw-text-xs {{ props.row.pointOfSale }}
</template>

<script>
import showToast from '@/utils/toast'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'MyProfile',
  components: {
    UserForm: () => import('@/components/partials/UserForm'),
    ConfirmationModal: () => import('@/components/partials/ConfirmationModal'),
  },
  props: {},
  data() {
    return {
      isModalActive: false,
    }
  },
  computed: {
    // -- mapState --
    ...mapState(['pointOfSales', 'profileAccess', 'userData']),
    // -- mapState --
  },
  watch: {},
  async mounted() {
    await this.handleGetMyProfile()
  },
  created() {},
  methods: {
    // -- mapActions --
    ...mapActions(['handleUpdateMyProfile', 'handleGetMyProfile']),
    // -- mapActions --
    async handleUpdate() {
      if (!this.userData.pointOfSale) {
        showToast(this.$i18n.t('selectPointOfSale'), 'is-danger')
        return
      }
      await this.handleUpdateMyProfile()
    },
  },
}
</script>

<style lang="scss" scoped>
.my-profile-wrapper {
  .fields {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    @media screen and(min-width: 1500px) {
      grid-template-columns: repeat(4, minmax(300px, 1fr));
    }
  }
}
</style>

<style lang="scss">
.my-profile-wrapper {
  label {
    font-size: 0.75rem;
  }
}
</style>
