<template lang="pug">
.home-page-wrapper
  component(:is='currentPartial')
</template>

<script>
import { mapState } from 'vuex'
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
.home-page-wrapper {
  width: 100%;
  height: 100%;
}
</style>
