<template lang="pug">
#pending.pending-wrapper
  compinent(is='LoginRequest', :steps='1')
</template>

<script>
export default {
  name: 'Pending',
  components: {
    LoginRequest: () => import('@/components/partials/LoginRequest'),
  },
  layout: 'newLayout',
  middleware: ['auth'],
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
.pending-wrapper {
}
</style>
