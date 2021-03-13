<template lang="pug">
.analyst-menu-wrapper
  b-menu-list(:label='$t("analystMenu")')
    b-menu-item.tw-text-xs.tw-py-1.tw-w-100(
      icon='account',
      :label='$t("myProfile")',
      @click='changePartial("MyProfile")'
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
      icon='access-point-network',
      :label='$t("maintainSystems")',
      @click='changePartial("MaintainSystem")'
    )
</template>

<script>
export default {
  name: 'AnalystMenu',
  components: {},
  props: {},
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
.analyst-menu-wrapper {
}
</style>
