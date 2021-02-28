<template lang="pug">
.navbar-wrapper
  b-navbar.tw-shadow(:fixed-top='true')
    template(#brand)
      b-navbar-item(tag='router-link', :to='{ path: "/" }')
        img(src='~/assets/CWT_logo_-_Color_-_RGB_small_1.jpg', alt='CWT')
    template(#start)
    template(#end)
      .side-menu-content.tw-block(class='md:tw-hidden')
        b-navbar-item
          menu-gestor
      b-navbar-item(tag='div')
        .buttonns.tw-flex.tw-items-center
          nuxt-link.tw-mx-2(:to='switchLocalePath("en")') 🇺🇸
          nuxt-link.tw-mx-2(:to='switchLocalePath("br")') 🇧🇷
          b-button(tag='router-link', to='/login', type='is-primary is-link') {{ $t("logout") }}
</template>

<script>
export default {
  name: 'Navbar',
  components: {
    MenuGestor: () => import('@/components/partials/MenuGestor'),
  },
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
.navbar-wrapper {
}
</style>
