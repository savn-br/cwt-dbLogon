<template lang="pug">
.home-page-wrapper
  component(:is='componentPartial')
</template>

<script>
export default {
  name: 'Collaborator',
  components: {
    MyProfile: () => import('@/components/partials/MyProfile'),
    LoginRequest: () => import('@/components/partials/LoginRequest'),
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
    this.$nuxt.$emit('menuType', 'CollaboratorMenu')
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
