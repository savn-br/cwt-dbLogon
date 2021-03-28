<template lang="pug">
.navbar-wrapper
  b-navbar.tw-shadow-md(:fixed-top='true')
    template(#brand)
      b-navbar-item(tag='router-link', :to='{ path: "/" }')
        img(src='~/assets/CWT_LOGO_TRASNPARENTE.png', alt='CWT')
    template(#start)
    template(#end)
      .side-menu-content.tw-block(class='md:tw-hidden')
        b-navbar-item
          component(:is='menuType')
      b-navbar-item(tag='div')
        .buttonns.tw-flex.tw-items-center.tw-justify-end
          nuxt-link.tw-mr-4(:to='switchLocalePath("en")')
            img.tw-w-5.tw-h-5(src='@/assets/flags/en.svg', alt='EUA flag')
          nuxt-link.tw-mr-4(:to='switchLocalePath("br")')
            img.tw-w-5.tw-h-5(src='@/assets/flags/br.svg', alt='Brazil flag')
          b-button.tw-w-24(
            icon-left='logout',
            @click='logout',
            type='is-primary is-link'
          ) {{ $t("logout") }}
</template>

<script>
export default {
  name: 'Navbar',
  components: {
    ManagerMenu: () => import('@/components/partials/ManagerMenu'),
    AdministratorMenu: () => import('@/components/partials/AdministratorMenu'),
    CollaboratorMenu: () => import('@/components/partials/CollaboratorMenu'),
    AnalystMenu: () => import('@/components/partials/AnalystMenu'),
  },
  props: {
    menuType: { type: String, default: () => '' },
  },
  data() {
    return {}
  },
  computed: {},
  watch: {},
  mounted() {},
  created() {},
  methods: {
    logout() {
      window.localStorage.clear()
      this.$router.push('/')
    },
  },
}
</script>

<style lang="scss" scoped>
.navbar-wrapper {
}
</style>
