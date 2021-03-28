<template lang="pug">
.administrator-menu-wrapper
  b-menu-list(:label='$t("administratorMenu")')
    b-menu-item.tw-text-xs.tw-py-1.tw-w-100(
      icon='account',
      :label='$t("myProfile")',
      @click='changePartial("MyProfile")'
    )
    b-menu-item.tw-text-xs.tw-py-1(
      icon='account-details',
      :label='$t("managerPanel")',
      @click='changePartial("ManagerPanel")'
    )
    b-menu-item.tw-text-xs.tw-py-1(
      icon='account-arrow-right',
      :label='$t("profileAssignment")',
      @click='changePartial("AssignmentOfProfile")'
    )
    b-menu-item.tw-text-xs.tw-py-1(
      icon='account-cancel',
      :label='$t("blockUsers")',
      @click='changePartial("BlockUser")'
    )
    b-menu-item.tw-text-xs.tw-py-1(
      icon='account-check',
      :label='$t("approvalDelegation")',
      @click='changePartial("ApprovalDelegation")'
    )
    b-menu-item.tw-text-xs.tw-py-1(
      icon='account-search',
      :label='$t("profileSearch")',
      @click='changePartial("ProfileSearch")'
    )
    b-menu-item.tw-text-xs.tw-py-1(
      icon='account-lock',
      :label='$t("maintainProfiles")',
      @click='changePartial("MaintainProfile")'
    )
    b-menu-item.tw-text-xs.tw-py-1(
      icon='account-supervisor',
      :label='$t("alternativeApprover")',
      @click='changePartial("AlternateApproverRegister")'
    )
</template>

<script>
export default {
  name: 'AdministratorMenu',
  components: {},
  data() {
    return {}
  },
  computed: {},
  watch: {},
  mounted() {},
  created() {},
  methods: {
    changePartial(partialName) {
      this.$store.commit('changeCurrentPartial', partialName)
    },
  },
}
</script>

<style lang="scss" scoped>
.administrator-menu-wrapper {
}
</style>
