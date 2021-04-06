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
  },
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
