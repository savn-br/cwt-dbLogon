<template lang="pug">
.detail-table-wrapper
  section
    b-table(
      :data='data',
      :show-header='false',
      :bordered='false',
      :paginated='false',
      :detailed='!!data[0].children && !!data[0].children.length',
      detail-key='id'
    )
      b-table-column(
        field='sistema',
        v-slot='props',
        :centered='true',
        width='50%'
      )
        | {{ props.row.sistema }}
      b-table-column(
        field='nota',
        v-slot='props',
        :centered='true',
        width='50%'
      )
        | {{ props.row.nota }}
      template(#detail='props')
        detail-table(
          :data='props.row.children',
          v-if='props.row.children && props.row.children.length',
          :showDetailIcon='!!props.row.children && props.row.children.length'
        )
</template>

<script>
export default {
  name: 'DetailTable',
  components: {},
  props: {
    data: { type: Array, default: () => [] },
  },
  data() {
    return {
      defaultOpenedDetails: [1],
    }
  },
  computed: {},
  watch: {},
  mounted() {},
  created() {},
  methods: {},
}
</script>

<style lang="scss" scoped>
.detail-table-wrapper {
}
</style>
<style lang="scss">
.detail-table-wrapper {
  @media screen and (min-width: 769px) {
    .table.is-bordered tr:last-child td {
      padding-right: 0;
    }
  }
  .b-table .table tr.detail .detail-container {
    padding: 0;
  }
}
</style>
