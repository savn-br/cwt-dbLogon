<template lang="pug">
#assignmentOfProfile2.assignment-of-profile2-wrapper.tw-mt-8.tw-px-8
  standard-table(:data='profileDescription')
    b-table-column(
      v-slot='props',
      field='profile_code',
      :searchable='true',
      :label='$t("profileCode")'
    )
      span.tw-text-xs {{ props.row.profile_code }}
    b-table-column(
      v-slot='props',
      field='profile_description',
      :searchable='true',
      :label='$t("profileDescription")'
    )
      span.tw-text-xs {{ props.row.profile_description }}
    b-table-column(
      v-slot='props',
      field='active',
      :label='$t("active")',
      :centered='true'
    )
      b-checkbox(v-model='props.row.active')
        span.tw-text-xs {{ $t("active") }}
    b-table-column(
      :label='$t("operation")',
      field='active_operation',
      :centered='true',
      v-slot='props'
    )
      .operation-wrapper
        b-checkbox(v-model='props.row.active_operation')
          span.tw-text-xs {{ $t("active") }}
        a(href='#')
          b-icon(icon='account-details')
</template>

<script>
export default {
  name: 'AssignmentOfProfile2',
  components: {
    StandardTable: () => import('@/components/StandardTable'),
  },
  props: {},
  data() {
    return {
      profileDescription: require('@/jsons/profile-description-table-data.json'),
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
