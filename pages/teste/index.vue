<template lang="pug">
#teste.teste-wrapper
  component(is='MaintainProfile2')
</template>

<script>
export default {
  name: 'Teste',
  components: {
    LoginRequest: () => import('@/components/partials/LoginRequest'), // F-01
    MyProfile: () => import('@/components/partials/MyProfile'), // F-02
    ManagerPanel: () => import('@/components/partials/ManagerPanel'), // F-03
    AssignmentOfProfile: () =>
      import('@/components/partials/AssignmentOfProfile'), // F-04
    AssignmentOfProfile2: () =>
      import('@/components/partials/AssignmentOfProfile2'), // F-04/2
    BlockUser: () => import('@/components/partials/BlockUser'), // F-05
    ApprovalDelegation: () =>
      import('@/components/partials/ApprovalDelegation'), // F-06
    ProfileSearch: () => import('@/components/partials/ProfileSearch'), // F-07
    ProfileSearch2: () => import('@/components/partials/ProfileSearch2'), // F-07/2
    MaintainProfile: () => import('@/components/partials/MaintainProfile'), // F-08
    MaintainProfile2: () => import('@/components/partials/MaintainProfile2'), // F-08/2
    MaintainSystem: () => import('@/components/partials/MaintainSystem'), // F-09
    MaintainSystem2: () => import('@/components/partials/MaintainSystem2'), // F-09/2
    MaintainSystem3: () => import('@/components/partials/MaintainSystem3'), // F-09/3
    AlternateApproverRegister: () =>
      import('@/components/partials/AlternateApproverRegister'), // F-10
  },
  props: {},
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
.teste-wrapper {
}
</style>
