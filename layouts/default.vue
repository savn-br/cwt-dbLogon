<template lang="pug">
.main_page_layout
  navbar
  .tw-block.main_content(class='md:tw-grid')
    side-menu.tw-pl-4.tw-hidden(class='md:tw-block')
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

import SideBar from '~/components/partials/SideBar'

export default {
  name: 'MainPageLayout',
  components: {
    SideBar,
    Navbar: () => import('@/components/partials/Navbar'),
    SideMenu: () => import('@/components/partials/SideMenu'),
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
  height: 100%;
  grid-template-columns: 300px 1fr;
}
.main_page_layout {
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}
.section {
  padding: 1rem 2rem;
}
</style>
