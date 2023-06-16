<template lang="pug">
.main_page_layout-wrapper
  v-idle.tw-hidden(
    @idle='onidle',
    :events='["mousedown"]',
    :loop='true',
    :wait='5',
    :duration='60 * 30'
  )
  navbar(menuType='HomeMenu')
  .tw-block.main_content(class='md:tw-grid')
    side-menu.tw-px-4.tw-hidden.tw-h-screen.tw-text-white(
      class='md:tw-block',
      menuType='HomeMenu'
    )
    nuxt.wrapper-content
</template>

<script>
import Vidle from 'v-idle'
export default {
  name: 'MainPageLayout',
  components: {
    Navbar: () => import('@/components/partials/Navbar'),
    SideMenu: () => import('@/components/partials/SideMenu'),
    Vidle,
  },
  data() {
    return {}
  },
  computed: {},
  created() {},

  methods: {
    onidle() {
      window.localStorage.clear()
      window.location.href = '/brlogon/'
    },
  },
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
