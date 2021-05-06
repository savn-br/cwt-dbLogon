<template lang="pug">
#isLoading.is-loading-wrapper.tw-max-w-md(v-show='isLoading')
  lottie(
    :options='defaultOptions',
    :width='100',
    v-on:animCreated='handleAnimation'
  )
</template>

<script>
import { mapState } from 'vuex'
import Lottie from 'vue-lottie/src/lottie.vue'
import * as animationData from '~/lottie/loading.json'
export default {
  name: 'IsLoading',
  components: {
    lottie: Lottie,
  },
  props: {},
  data() {
    return {
      defaultOptions: { animationData: animationData.default, loop: true },
    }
  },
  computed: {
    ...mapState({
      isLoading: (state) => state.isLoading,
    }),
  },
  watch: {},
  mounted() {},
  created() {},
  methods: {
    handleAnimation(anim) {
      this.anim = anim
    },
  },
}
</script>

<style lang="scss" scoped>
.is-loading-wrapper {
}
</style>
