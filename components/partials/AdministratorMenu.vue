<template lang="pug">
.administrator-menu-wrapper
  b-menu-list(:label='$t("administratorMenu")')
    b-menu-item.tw-text-xs.tw-py-1.tw-w-100(
      icon='account',
      :label='$t("myProfile")',
      @click='setPartial("MyProfile")'
    )
    b-menu-item.tw-text-xs.tw-py-1(
      icon='account-details',
      :label='$t("managerPanel")',
      @click='setPartial("ManagerPanel")'
    )
    b-menu-item.tw-text-xs.tw-py-1(
      icon='account-arrow-right',
      :label='$t("profileAssignment")',
      @click='setPartial("AssignmentOfProfile")'
    )
    b-menu-item.tw-text-xs.tw-py-1(
      icon='account-cancel',
      :label='$t("blockUsers")',
      @click='setPartial("BlockUser")'
    )
    b-menu-item.tw-text-xs.tw-py-1(
      icon='account-check',
      :label='$t("approvalDelegation")',
      @click='setPartial("ApprovalDelegation")'
    )
    b-menu-item.tw-text-xs.tw-py-1(
      icon='account-search',
      :label='$t("profileSearch")',
      @click='setPartial("ProfileSearch")'
    )
    b-menu-item.tw-text-xs.tw-py-1(
      icon='account-lock',
      :label='$t("maintainProfiles")',
      @click='setPartial("MaintainProfile")'
    )
    b-menu-item.tw-text-xs.tw-py-1(
      icon='account-supervisor',
      :label='$t("alternativeApprover")',
      @click='setPartial("AlternateApproverRegister")'
    )
</template>

<script>
import setMenu from '~/mixins/setMenu'
export default {
  name: 'AdministratorMenu',
  components: {},
  mixins: [setMenu],
  data() {
    return {}
  },
  computed: {},
  watch: {},
  mounted() {},
  created() {},
  methods: {},
}
</script>

<style lang="scss" scoped>
.administrator-menu-wrapper {
}
</style>
