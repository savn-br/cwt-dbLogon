<template lang="pug">
.standard-table-wrapper
  b-table(
    :data='data',
    :columns='columns',
    :bordered='true',
    :narrowed='true',
    :hoverable='true'
  )
    slot
</template>

<script>
export default {
  name: 'StandardTable',
  components: {},
  props: {
    data: {
      type: Array,
      default: () => [],
    },
    columns: {
      type: Array,
      default: () => [],
    },
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
.standard-table-wrapper {
}
</style>

<style lang="scss">
.standard-table-wrapper {
  .table th {
    font-size: 0.75rem;
    background: $principal;
    color: #fff;
  }
  .table td::before {
    font-size: 0.75rem;
  }
}
</style>
