<template lang="pug">
.home-page-wrapper
  component(is='ProfileSearch')
</template>

<script>
export default {
  name: 'HomePage',
  components: {
    LoginRequest: () => import('@/components/partials/LoginRequest'),
    MyProfile: () => import('@/components/partials/MyProfile'),
    ManagerPanel: () => import('@/components/partials/ManagerPanel'),
    BlockUser: () => import('@/components/partials/BlockUser'),
    ApprovalDelegation: () =>
      import('@/components/partials/ApprovalDelegation'),
    AssignmentOfProfile: () =>
      import('@/components/partials/AssignmentOfProfile'),
    ProfileSearch: () => import('@/components/partials/ProfileSearch'),
  },
  data() {
    return {}
  },
  computed: {},
  watch: {},
  mounted() {},
  created() {
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
