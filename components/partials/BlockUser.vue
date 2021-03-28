<template lang="pug">
.block-user-wrapper.tw-mt-8.tw-px-8
  form
    fieldset
      b-radio(v-model='radio', name='select', native-value='todos') {{ $t("allUsers") }}
      b-radio(v-model='radio', name='select', native-value='actives') {{ $t("activeOnly") }}
  standard-table.tw-mt-5(:data='data', :bordered='true')
    b-table-column(field='user', :label='$t("user")', v-slot='props')
      span.tw-text-xs {{ props.row.user }}
    b-table-column(field='name', :label='$t("name")', v-slot='props')
      span.tw-text-xs {{ props.row.name }}
    b-table-column(field='profile', :label='$t("profile")', v-slot='props')
      span.tw-text-xs {{ props.row.profile }}
    b-table-column(
      field='initial_date',
      :label='$t("initialDate")',
      v-slot='props'
    )
      span.tw-text-xs {{ props.row.initial_date }}
    b-table-column(
      field='end_date',
      :label='$t("initialDate")',
      v-slot='props'
    )
      span.tw-text-xs {{ props.row.end_date }}
    b-table-column(
      ,
      :label='$t("operation")',
      v-slot='props',
      :centered='true'
    )
      b-field
        b-switch(
          size='is-small',
          true-value='on',
          false-value='off',
          v-model='props.row.operation'
        ) {{ props.row.operation }}
</template>

<script>
export default {
  name: 'BlockUser',
  components: {
    StandardTable: () => import('@/components/StandardTable'),
  },
  props: {},
  data() {
    return {
      data: require('@/jsons/block-user-data.json'),
      radio: '',
      switchValue: 'Off',
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
.block-user-wrapper {
}
</style>
