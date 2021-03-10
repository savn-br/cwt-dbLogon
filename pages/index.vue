<template lang="pug">
.home-page-wrapper
  component(is='MaintainSystem3')
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
    AssignmentOfProfile2: () =>
      import('@/components/partials/AssignmentOfProfile2'),
    MaintainProfile: () => import('@/components/partials/MaintainProfile'),
    MaintainSystem: () => import('@/components/partials/MaintainSystem'),
    MaintainSystem2: () => import('@/components/partials/MaintainSystem2'),
    MaintainSystem3: () => import('@/components/partials/MaintainSystem3'),
    AlternateApproverRegister: () =>
      import('@/components/partials/AlternateApproverRegister'),
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
