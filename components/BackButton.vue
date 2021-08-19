<template lang="pug">
#backButton.back-button-wrapper.tw-mb-2
  b-button(icon-left='arrow-left', @click='goToPartial') {{ $t("back") }}
</template>

<script>
import setMenu from '@/mixins/setMenu'
export default {
  name: 'BackButton',
  components: {},
  mixins: [setMenu],
  props: {
    partialComponent: {
      type: String,
      default: () => '',
    },
  },
  data() {
    return {}
  },
  computed: {},
  watch: {},
  mounted() {},
  created() {},
  methods: {
    goToPartial() {
      this.setPartial(this.partialComponent)
    },
  },
}
</script>

<style lang="scss" scoped>
.back-button-wrapper {
}
</style>
