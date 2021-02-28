<template lang="pug">
.main_page_layout-wrapper
  navbar(:menuType='menuType')
  .tw-block.main_content(class='md:tw-grid')
    side-menu.tw-shadow.tw-px-4.tw-hidden(class='md:tw-block', :menuType='menuType')
    nuxt
  //- .section
    .tile.is-ancestor
      .tile.is-vertical.is-3
        .tile
          slot(name='nav_bar')
            side-bar
      .tile.is-vertical.is-9
        .tile
          slot(name='content')
            nuxt
</template>

<script>
// import { mapState } from 'vuex'

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
  min-height: 100vh;
  grid-template-columns: 310px 1fr;
}
</style>
