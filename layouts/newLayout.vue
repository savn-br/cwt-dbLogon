<template lang="pug">
.new-layout-wrapper
  navbar
  nuxt
</template>

<script>
export default {
  components: {
    Navbar: () => import('@/components/partials/Navbar'),
  },
  data() {
    return {}
  },
  computed: {},
  created() {},

  methods: {},
}
</script>

<style lang="scss" scoped>
.new-layout-wrapper {
}
</style>
