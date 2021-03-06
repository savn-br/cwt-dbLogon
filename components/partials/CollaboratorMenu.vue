<template lang="pug">
.collaborator-menu-wrapper
  b-menu-list(:label='$t("collaboratorMenu")')
    b-menu-item.tw-text-xs.tw-py-1.tw-w-100(
      icon='account',
      :label='$t("myProfile")'
    )
    b-menu-item.tw-text-xs.tw-py-1.tw-w-100(
      icon='account-key',
      :label='$t("accessRequest")'
    )
</template>

<script>
export default {
  name: 'CollaboratorMenu',
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
.collaborator-menu-wrapper {
}
</style>
