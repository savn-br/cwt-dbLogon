<template lang="pug">
#alternateApproverRegister.alternate-approver-register-wrapper.tw-mt-6.tw-px-8
  b-modal(v-model='isModalActive')
    template(#default='props')
      alternate-approver-modal(@close='props.close')
  .button-primary.tw-flex.tw-justify-end
    b-button(type='is-primary', @click='isModalActive = true') {{ $t("add") }}
  standard-table.tw-mt-5(
    :data='data',
    :bordered='true',
    :narrowed='true',
    :hoverable='true'
  )
    b-table-column(
      field='register',
      :label='$t("registration")',
      v-slot='props'
    )
      span.tw-text-xs {{ props.row.register }}
    b-table-column(
      field='name',
      :label='$t("delegateApproverName")',
      v-slot='props'
    )
      span.tw-text-xs {{ props.row.name }}
    b-table-column(field='email', label='E-mail', v-slot='props')
      span.tw-text-xs {{ props.row.email }}
    b-table-column(
      field='initial_date',
      :label='$t("initialDate")',
      v-slot='props'
    )
      span.tw-text-xs {{ props.row.initial_date }}
    b-table-column(field='end_date', :label='$t("finalDate")', v-slot='props')
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
  name: 'AlternateApproverRegister',
  components: {
    StandardTable: () => import('@/components/StandardTable'),
    AlternateApproverModal: () =>
      import('@/components/partials/AlternateApproverModal'),
  },
  props: {},
  data() {
    return {
      isModalActive: false,
      data: require('@/jsons/alternate-approver-data.json'),
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
.alternate-approver-register-wrapper {
}
</style>
