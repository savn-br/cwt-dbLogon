<template lang="pug">
.home-page-wrapper
  component(:is='componentPartial')
</template>

<script>
export default {
  name: 'Manager',
  components: {
    MyProfile: () => import('@/components/partials/MyProfile'),
    ManagerPanel: () => import('@/components/partials/ManagerPanel'),
    AssignmentOfProfile: () =>
      import('@/components/partials/AssignmentOfProfile'),
    BlockUser: () => import('@/components/partials/BlockUser'),
    ApprovalDelegation: () =>
      import('@/components/partials/ApprovalDelegation'),
    ProfileSearch: () => import('@/components/partials/ProfileSearch'),
    ProfileSearch2: () => import('@/components/partials/ProfileSearch2'),
  },
  data() {
    return {
      componentPartial: 'MyProfile',
    }
  },
  computed: {},
  watch: {},
  async mounted() {
    // try {
    //   const resp = await this.$axios.get('/users/')
    //   console.log(resp)
    // } catch (err) {
    //   console.log(err)
    // }
  },

  created() {
    this.$nuxt.$on('changePartial', (partial) => {
      this.componentPartial = partial
    })
    this.$nuxt.$emit('menuType', 'ManagerMenu')
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
