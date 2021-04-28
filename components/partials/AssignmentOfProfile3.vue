<template lang="pug">
#assignmentOfProfile2.assignment-of-profile2-wrapper.tw-mt-8.tw-px-8
  back-button(partialComponent='AssignmentOfProfile')
  .tw-grid.tw-w-full.tw-place-content-center.tw-text-xl(
    v-if='!availablePointOfSales.length'
  ) Sem pontos de vendas para adicionar
  standard-table(
    v-if='availablePointOfSales.length',
    :data='availablePointOfSales'
  )
    b-table-column(
      v-slot='props',
      field='pointOfSaleId',
      :searchable='true',
      label='Código do ponto de venda'
    )
      span.tw-text-xs {{ props.row.pointOfSaleId }}
    b-table-column(
      v-slot='props',
      field='pointOfSale',
      :searchable='true',
      label='Nome do ponto de venda'
    )
      span.tw-text-xs {{ props.row.pointOfSale }}
    b-table-column(
      :label='$t("operation")',
      field='active',
      :centered='true',
      v-slot='props'
    )
      .operation-wrapper
        b-checkbox(
          :value='isPointOfSaleActive2Collaborator(props.row.pointOfSaleId)',
          @input='(active) => { handlePointOfSale2Collaborator(active, props.row.pointOfSaleId); }'
        )
          span.tw-text-xs {{ $t("active") }}
</template>

<script>
import { mapMutations, mapActions, mapState, mapGetters } from 'vuex'
export default {
  name: 'AssignmentOfProfile2',
  components: {
    StandardTable: () => import('@/components/StandardTable'),
  },
  props: {},
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['isPointOfSaleActive2Collaborator']),
    ...mapState(['availablePointOfSales']),
  },
  watch: {},
  async mounted() {
    await this.getAvailablePointOfSales()
  },
  created() {},
  methods: {
    ...mapMutations([]),
    ...mapActions([
      'getAvailablePointOfSales',
      'setPointOfSale2Collaborator',
      'removePointOfSale2Collaborator',
    ]),

    async handlePointOfSale2Collaborator(active, pointOfSaleId) {
      if (active) {
        await this.setPointOfSale2Collaborator({ pointOfSaleId })
      } else {
        await this.removePointOfSale2Collaborator({ pointOfSaleId })
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.assignment-of-profile2-wrapper {
}
</style>

<style lang="scss">
.assignment-of-profile2-wrapper {
  input.input {
    height: px2rem(25);
  }
}
</style>
