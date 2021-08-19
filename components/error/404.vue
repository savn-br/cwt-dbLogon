<template lang="pug">
.lottie-wrapper
  lottie(:options='lottieOptions', v-on:animCreated='handleAnimation')
</template>

<script>
import lottie from 'vue-lottie/src/lottie.vue'
import * as animationData from '~/lottie/404.json'
export default {
  name: 'Error404',
  components: {
    lottie,
  },
  props: {
    error: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      anim: null, // for saving the reference to the animation
      lottieOptions: { animationData: animationData.default },
    }
  },
  methods: {
    handleAnimation(anim) {
      this.anim = anim
    },
  },
}
</script>

<style lang="scss" scoped>
.lottie-wrapper {
  height: 100vh;
  max-width: 512px;
  margin: 0 auto;
}
</style>
