<template lang="pug">
.home-page-wrapper
  component(:is='componentPartial')
</template>

<script>
export default {
  name: 'Analyst',
  components: {
    MyProfile: () => import('@/components/partials/MyProfile'),
    ProfileSearch: () => import('@/components/partials/ProfileSearch'),
    MaintainProfile: () => import('@/components/partials/MaintainProfile'),
    MaintainSystem: () => import('@/components/partials/MaintainSystem'),
  },
  data() {
    return {
      componentPartial: 'MyProfile',
    }
  },
  computed: {},
  watch: {},
  mounted() {},
  created() {
    this.$nuxt.$on('changePartial', (partial) => {
      this.componentPartial = partial
    })
    this.$nuxt.$emit('menuType', 'AnalystMenu')
  },
  methods: {},
}
</script>

<style lang="scss" scoped>
.home-page-wrapper {
  width: 100%;
  height: 100%;
}
</style>
