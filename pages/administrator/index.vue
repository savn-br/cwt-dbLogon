<template lang="pug">
.home-page-wrapper
  component(:is='componentPartial')
</template>

<script>
export default {
  name: 'Administrator',
  components: {
    MyProfile: () => import('@/components/partials/MyProfile'),
    ManagerPanel: () => import('@/components/partials/ManagerPanel'),
    AssignmentOfProfile: () =>
      import('@/components/partials/AssignmentOfProfile'),
    BlockUser: () => import('@/components/partials/BlockUser'),
    ApprovalDelegation: () =>
      import('@/components/partials/ApprovalDelegation'),
    ProfileSearch: () => import('@/components/partials/ProfileSearch'),
    MaintainProfile: () => import('@/components/partials/MaintainProfile'),
    AlternateApproverRegister: () =>
      import('@/components/partials/AlternateApproverRegister'),
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
    this.$nuxt.$emit('menuType', 'AdministratorMenu')
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
