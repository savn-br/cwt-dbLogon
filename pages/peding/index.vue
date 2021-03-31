<template lang="pug">
#peding.peding-wrapper
  compinent(is='LoginRequest', :steps='1')
</template>

<script>
export default {
  name: 'Peding',
  components: {
    LoginRequest: () => import('@/components/partials/LoginRequest'),
  },
  layout: 'newLayout',
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
.peding-wrapper {
}
</style>
