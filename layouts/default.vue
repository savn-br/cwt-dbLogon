<template lang="pug">
.main_page_layout-wrapper
  navbar(:menuType='menuType')
  .tw-block.main_content(class='md:tw-grid')
    side-menu.tw-px-4.tw-hidden.tw-h-screen.tw-text-white(
      class='md:tw-block',
      :menuType='menuType'
    )
    nuxt.wrapper-content
</template>

<script>
export default {
  name: 'MainPageLayout',
  components: {
    Navbar: () => import('@/components/partials/Navbar'),
    SideMenu: () => import('@/components/partials/SideMenu'),
  },
  data() {
    return { menuType: 'MenuGestor' }
  },
  created() {
    this.$nuxt.$on('menuType', (dataMenu) => {
      this.menuType = dataMenu
    })
  },

  methods: {
    logout() {
      this.$store.dispatch('login/userLogout', this.login).then(() => {
        this.$router.push('/login')
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.main_content {
  /* min-height: 100vh; */
  grid-template-columns: 250px 1fr;
  .wrapper-content {
    border-left: 1px solid rgb(214, 214, 214);
  }
}
</style>
