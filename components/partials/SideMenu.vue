<template lang="pug">
.side-menu-wrapper.tw-pt-4
  b-menu.tw-mt-20.tw-p-2.tw-flex(class='md:tw-block')
    component(:is='menuType')
</template>

<script>
export default {
  name: 'SideMenu',
  components: {
    MenuGestor: () => import('@/components/partials/MenuGestor'),
    MenuAdministrador: () => import('@/components/partials/MenuAdministrador'),
    MenuColaborador: () => import('@/components/partials/MenuColaborador'),
    MenuAnalista: () => import('@/components/partials/MenuAnalista'),
  },
  props: {
    menuType: { type: String, default: () => '' },
  },
  data() {
    return {
      isActive: true,
    }
  },
  computed: {},
  watch: {},
  mounted() {},
  created() {},
  methods: {},
}
</script>
<style lang="scss" scoped>
.side-menu-wrapper {
}
</style>
<style lang="scss">
.side-menu-wrapper {
  .menu {
    position: fixed;
    top: 0;
    left: 0;
    width: 250px;
    bottom: 0;
  }
}
</style>
