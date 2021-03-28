<template lang="pug">
.home-page-wrapper
  component(:is='currentPartial')
</template>

<script>
import { mapState } from 'vuex'
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
