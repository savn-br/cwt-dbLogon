<template lang="pug">
.analyst-menu-wrapper
  b-menu-list(:label='$t("analystMenu")')
    b-menu-item.tw-text-xs.tw-py-1.tw-w-100(
      icon='account',
      :label='$t("myProfile")',
      @click='setPartial("MyProfile")'
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
      icon='access-point-network',
      :label='$t("maintainSystems")',
      @click='setPartial("MaintainSystem")'
    )
</template>

<script>
import setMenu from '~/mixins/setMenu'
export default {
  name: 'AnalystMenu',
  components: {},
  mixins: [setMenu],
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
.analyst-menu-wrapper {
}
</style>
