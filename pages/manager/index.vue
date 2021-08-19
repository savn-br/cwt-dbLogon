<template lang="pug">
.home-page-wrapper
  component(:is='currentPartial')
</template>

<script>
import { mapState } from 'vuex'
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
