<template lang="pug">
.main_page_layout-wrapper
  navbar(:menuType='currentMenu')
  .tw-block.main_content(class='md:tw-grid')
    side-menu.tw-px-4.tw-hidden.tw-h-screen.tw-text-white(
      class='md:tw-block',
      :menuType='currentMenu'
    )
    nuxt.wrapper-content
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'MainPageLayout',
  components: {
    Navbar: () => import('@/components/partials/Navbar'),
    SideMenu: () => import('@/components/partials/SideMenu'),
  },
  data() {
    return { menuType: 'ManagerMenu' }
  },
  computed: {
    ...mapState({
      currentMenu: (state) => state.currentMenu,
    }),
  },
  created() {},

  methods: {},
}
</script>

<style lang="scss" scoped>
.main_content {
  /* min-height: 100vh; */
  grid-template-columns: px2rem(250) 1fr;

  .wrapper-content {
    border-left: px2rem(1) solid rgb(214, 214, 214);
  }
}
</style>
