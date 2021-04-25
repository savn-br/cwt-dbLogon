<template lang="pug">
.my-profile-wrapper.tw-mt-8.tw-px-8
  user-form(:isDisabled='true')
  .update-buttons.tw-flex.tw-justify-center
    b-button.tw-mx-2.tw-my-4(type='is-success', @click='update') {{ $t("update") }}
  collapse.tw-text-sm(
    v-if='!!profileAccess && !!profileAccess.profileName',
    :title='profileAccess.profileName'
  )
    component(
      v-for='(system,index) in profileAccess.details',
      is='SystemCollapse',
      :key='index',
      :system='system'
    )
    //- component(is='RecursiveCollapse', :tree='tree', padding='0')
  collapse.tw-text-sm(
    v-if='!!tableData && tableData.length',
    :title='$t("customerView")'
  )
    standard-table.tw-my-4(:data='tableData', , :bordered='true')
      b-table-column(
        field='pointOfSale',
        :label='$t("salesPoint")',
        v-slot='props'
      )
        span.tw-text-xs {{ props.row.pointOfSale }}
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'MyProfile',
  components: {
    Collapse: () => import('@/components/Collapse'),
    DetailTable: () => import('@/components/DetailTable'),
    UserForm: () => import('@/components/partials/UserForm'),
  },
  props: {},
  data() {
    const tree = require('@/jsons/directory-tree-data.json')
    return { tree }
  },
  computed: {
    ...mapState({
      profile: (state) => state.userData,
      tableData: (state) => state.pointOfSales,
      profileAccess: (state) => state.profileAccess,
    }),
  },
  watch: {},
  mounted() {
    this.$store.dispatch('getMyProfile')
  },
  created() {},
  methods: {
    async update() {
      await this.$store.dispatch('updateMyProfile')
    },
  },
}
</script>

<style lang="scss" scoped>
.my-profile-wrapper {
  .fields {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    @media screen and(min-width: 1500px) {
      grid-template-columns: repeat(4, minmax(300px, 1fr));
    }
  }
}
</style>

<style lang="scss">
.my-profile-wrapper {
  label {
    font-size: 0.75rem;
  }
}
</style>
