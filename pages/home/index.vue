<template lang="pug">
#home.home-wrapper
  component(:is='currentPartial')
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Home',
  components: {
    MyProfile: () => import('@/components/partials/MyProfile'),
    AssignmentOfProfile: () =>
      import('@/components/partials/AssignmentOfProfile'),
    AssignmentOfProfile2: () =>
      import('@/components/partials/AssignmentOfProfile2'),
    AssignmentOfProfile3: () =>
      import('@/components/partials/AssignmentOfProfile3'),
    ManagerPanel: () => import('@/components/partials/ManagerPanel'),
    BlockUser: () => import('@/components/partials/BlockUser'),
    ApprovalDelegation: () =>
      import('@/components/partials/ApprovalDelegation'),
    ProfileSearch: () => import('@/components/partials/ProfileSearch'),
    ProfileSearch2: () => import('@/components/partials/ProfileSearch2'),
    MaintainProfile: () => import('@/components/partials/MaintainProfile'),
    MaintainSystem: () => import('@/components/partials/MaintainSystem'),
    MaintainSystem2: () => import('@/components/partials/MaintainSystem2'),
    MaintainSystem3: () => import('@/components/partials/MaintainSystem3'),
    AlternateApproverRegister: () =>
      import('@/components/partials/AlternateApproverRegister'),
  },
  middleware: ['auth'],
  props: {},
  data() {
    return {}
  },
  computed: {
    ...mapState({
      currentPartial: (state) => state.currentPartial,
    }),
  },
  watch: {},
  mounted() {},
  created() {},
  methods: {},
}
</script>

<style lang="scss" scoped>
.home-wrapper {
}
</style>
