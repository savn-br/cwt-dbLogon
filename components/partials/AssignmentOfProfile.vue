<template lang="pug">
.assignment-of-profile-wrapper.tw-mt-8.tw-px-8
  profile-form(:data='profile')
    template(v-slot:content)
      b-checkbox.tw-m-5(v-model='profile.active', name='active') Ativo
  .update-buttons.tw-flex.tw-justify-center
    b-button.tw-mx-2.tw-my-4.tw-w-32(type='is-success') {{ $t("update") }}
  .view-profile
    .button-wrapper.tw-flex.tw-justify-end
      b-button.tw-w-24(type='is-primary') {{ $t("add") }}
    standard-table(:data='allocation')
      b-table-column(
        field='profile_code',
        :label='$t("profileCode")',
        v-slot='props'
      )
        span.tw-text-xs {{ props.row.profile_code }}
      b-table-column(
        field='profile_description',
        :label='$t("profileDescription")',
        v-slot='props'
      )
        span.tw-text-xs {{ props.row.profile_description }}
      b-table-column(
        field='initial_date',
        :label='$t("initialDate")',
        v-slot='props'
      )
        span.tw-text-xs {{ props.row.initial_date }}
      b-table-column(
        field='final_date',
        :label='$t("finalDate")',
        v-slot='props'
      )
        span.tw-text-xs {{ props.row.final_date }}
      b-table-column(
        ,
        :label='$t("operation")',
        v-slot='props',
        :centered='true'
      )
        .actions-wrapper.tw-flex.tw-justify-center
          b-field
            b-switch(
              size='is-small',
              true-value='on',
              false-value='off',
              v-model='props.row.operation'
            ) {{ props.row.operation }}
          span.tw-cursor-pointer(class='hover:tw-text-primary')
            b-icon(icon='eye', size='')
    .view-sales.tw-mt-6
      .button-wrapper.tw-flex.tw-justify-end
        b-button.tw-w-24(type='is-primary') {{ $t("add") }}
      standard-table(:data='sales')
        b-table-column(
          field='sales_description',
          :label='$t("salesName")',
          v-slot='props',
          width='80%'
        )
          span.tw-text-xs {{ props.row.sales_description }}
        b-table-column(
          :label='$t("operation")',
          v-slot='props',
          :centered='true'
        )
          .actions-wrapper.tw-flex.tw-justify-center
            b-field
              b-switch(
                size='is-small',
                true-value='on',
                false-value='off',
                v-model='props.row.operation'
              ) {{ props.row.operation }}
            span.tw-cursor-pointer(class='hover:tw-text-primary')
              b-icon(icon='eye', size='')
</template>

<script>
export default {
  name: 'AssignmentOfProfile',
  components: {
    ProfileForm: () => import('@/components/partials/ProfileForm'),
    StandardTable: () => import('@/components/StandardTable'),
  },
  props: {},
  data() {
    return {
      profile: require('@/jsons/profile-data.json'),
      allocation: require('@/jsons/assignment-table-data.json'),
      sales: require('@/jsons/sales-data.json'),
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
.assignment-of-profile-wrapper {
}
</style>
