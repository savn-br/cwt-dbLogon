<template lang="pug">
.menu-analista-wrapper
  b-menu-list(:label='$t("analystMenu")')
    b-menu-item.tw-text-xs.tw-py-1.tw-w-100(
      icon='account',
      :label='$t("myProfile")'
    )
    b-menu-item.tw-text-xs.tw-py-1(
      icon='account-search',
      :label='$t("profileSearch")'
    )
    b-menu-item.tw-text-xs.tw-py-1(
      icon='account-lock',
      :label='$t("maintainProfiles")'
    )
    b-menu-item.tw-text-xs.tw-py-1(
      icon='access-point-network',
      :label='$t("maintainSystems")'
    )
</template>

<script>
export default {
  name: 'MenuAnalista',
  components: {},
  props: {},
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
.menu-analista-wrapper {
}
</style>
