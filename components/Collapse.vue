<template lang="pug">
.collapse-wrapper
  b-collapse.card(
    animation='slide',
    aria-id='contentIdForA11y3',
    :open='false'
  )
    template(#trigger='props')
      .card-header(role='button', aria-controls='contentIdForA11y3')
        p.card-header-title {{ title }}
        a.card-header-icon
          b-icon(:icon='props.open ? "menu-down" : "menu-up"')
    .l-card-content.tw-px-2
      .content
        slot
</template>

<script>
export default {
  name: 'Collapse',
  components: {},
  props: {
    title: { type: String, default: () => '' },
  },
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
.collapse-wrapper {
}
</style>
