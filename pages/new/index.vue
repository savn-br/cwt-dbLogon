<template lang="pug">
#new.new-wrapper
  compinent(is='LoginRequest')
</template>

<script>
export default {
  name: 'New',
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
.new-wrapper {
}
</style>
