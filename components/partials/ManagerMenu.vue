<template lang="pug">
.manager-menu-wrapper
  b-menu-list(:label='$t("managerMenu")')
    b-menu-item.tw-text-xs.tw-py-1.tw-w-100(
      icon='account',
      :label='$t("myProfile")'
    )
    b-menu-item.tw-text-xs.tw-py-1(
      icon='account-details',
      :label='$t("managerPanel")'
    )
    b-menu-item.tw-text-xs.tw-py-1(
      icon='account-arrow-right',
      :label='$t("profileAssignment")'
    )
    b-menu-item.tw-text-xs.tw-py-1(
      icon='account-cancel',
      :label='$t("blockUsers")'
    )
    b-menu-item.tw-text-xs.tw-text-xs.tw-py-1(
      icon='account-check',
      :label='$t("approvalDelegation")'
    )
    b-menu-item.tw-text-xs.tw-py-1(
      icon='account-search',
      :label='$t("profileSearch")'
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
  methods: {},
}
</script>

<style lang="scss" scoped>
.manager-menu-wrapper {
}
</style>
