<template lang="pug">
.manager-menu-wrapper
  b-menu-list(:label='$t("managerMenu")')
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
    b-menu-item.tw-text-xs.tw-text-xs.tw-py-1(
      icon='account-check',
      :label='$t("approvalDelegation")',
      @click='changePartial("ApprovalDelegation")'
    )
    b-menu-item.tw-text-xs.tw-py-1(
      icon='account-search',
      :label='$t("profileSearch")',
      @click='changePartial("ProfileSearch")'
    )
</template>

<script>
export default {
  name: 'ManagerMenu',
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
      this.$nuxt.$emit('changePartial', partialName)
    },
  },
}
</script>

<style lang="scss" scoped>
.manager-menu-wrapper {
}
</style>
