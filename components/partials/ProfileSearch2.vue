<template lang="pug">
#profileSearch2.profile-search2-wrapper.tw-mt-8.tw-px-8
  b-modal(v-model='isModalActive', :on-cancel='handleCancelOperation')
    template(#default='props')
      confirmation-modal(
        @close='props.close',
        :onConfirm='handleUpdateProfile',
        :onCancel='handleCancelOperation'
      )
  back-button.tw-mb-4(:partialComponent='backProfileSearchPartial')
  form.fields.tw-grid.tw-mb-4(name='profileForm')
    b-field.tw-mx-2(:label='$t("profileCode")')
      b-input(
        size='is-small',
        v-model='selectedProfileData.profileId',
        disabled
      )
    b-field.tw-mx-2(:label='$t("profileDescription")')
      b-input(
        v-model='selectedProfileData.profileName',
        size='is-small',
        disabled
      )
    b-field.tw-mx-2(:label='$t("superProfile")')
      b-input(
        v-model='selectedProfileData.profileParentName',
        size='is-small',
        disabled
      )
    b-field.tw-mx-2(:label='$t("customerDataView")')
      b-input(
        v-model='selectedProfileData.indVision',
        size='is-small',
        disabled
      )
    //- b-field.tw-mx-2(label='Visão de dados de clientes')
    //-   b-input(, size='is-small', disabled)
    .switch-wrapper
      b-field.tw-mx-2
        b-switch(
          @input='(active) => handleUpdateViewCCard(active)',
          size='is-small',
          :value='selectedProfileData.viewCCard',
          ref='viewCCard'
        ) {{ $t("viewCard") }}
      b-field.tw-mx-2
        b-switch(
          ref='active',
          @input='(active) => handleUpdateActive(active)',
          size='is-small',
          :value='selectedProfileData.active'
        ) {{ $t("active") }}

  collapse.tw-text-sm(
    v-if='!!selectedProfileData.profileAccess && !!selectedProfileData.profileAccess.profileName',
    :title='selectedProfileData.profileAccess.profileName'
  )
    component(
      v-for='(system,index) in selectedProfileData.profileAccess.details',
      is='SystemCollapse',
      :key='index',
      :system='system'
    )
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'ProfileSearch2',
  components: {
    ConfirmationModal: () => import('@/components/partials/ConfirmationModal'),
  },
  props: {},
  data() {
    return {
      isModalActive: false,
      lastRefChanged: '',
      status: {
        active: false,
        viewCCard: false,
      },
    }
  },
  computed: {
    ...mapState(['selectedProfileData', 'backProfileSearchPartial']),
  },
  watch: {},
  async mounted() {
    await this.getSelectedProfileData()
    this.status.viewCCard = this.selectedProfileData.viewCCard
    this.status.active = this.selectedProfileData.active
  },
  created() {},
  methods: {
    ...mapActions(['getSelectedProfileData', 'handleUpdateProfileDataTerm']),
    async handleUpdateProfile() {
      const status = await this.handleUpdateProfileDataTerm({ ...this.status })
      if (status !== 200) {
        this.handleCancelOperation()
      }
    },
    handleUpdateActive(active) {
      this.status.active = active
      this.lastRefChanged = 'active'
      this.isModalActive = true
    },
    handleUpdateViewCCard(viewCCard) {
      this.status.viewCCard = viewCCard
      this.lastRefChanged = 'viewCCard'
      this.isModalActive = true
    },
    handleCancelOperation() {
      this.$refs[this.lastRefChanged].value = !this.status[this.lastRefChanged]
      this.$refs[this.lastRefChanged].computedValue =
        !this.status[this.lastRefChanged]
    },
  },
}
</script>

<style lang="scss" scoped>
.profile-search2-wrapper {
  .fields {
    grid-template-columns: repeat(auto-fill, minmax(px2rem(300), 1fr));
    @media screen and(min-width: px2rem(1500)) {
      grid-template-columns: repeat(4, minmax(px2rem(300), 1fr));
    }
  }
}
</style>

<style lang="scss">
.profile-search2-wrapper {
  .fields {
    max-width: px2rem(800);
    margin-left: auto;
    margin-right: auto;
  }

  label {
    font-size: 0.75rem;
  }
}
</style>
