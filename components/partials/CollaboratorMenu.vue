<template lang="pug">
.collaborator-menu-wrapper
  b-menu-list(:label='$t("collaboratorMenu")')
    b-menu-item.tw-text-xs.tw-py-1.tw-w-100(
      icon='account',
      :label='$t("myProfile")',
      @click='setPartial("MyProfile")'
    )
</template>
<script>
import setMenu from '~/mixins/setMenu'
export default {
  name: 'CollaboratorMenu',
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
.collaborator-menu-wrapper {
}
</style>
