<template lang="pug">
.home-page-wrapper
  component(:is='currentPartial')
</template>

<script>
import { mapState } from 'vuex'
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
