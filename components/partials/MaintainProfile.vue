<template lang="pug">
#maintainProfile.maintain-profile-wrapper.tw-mt-6.tw-px-8
  .buttons-wrapper.tw-flex.tw-justify-end.tw-mb-2
    b-button(type='is-primary') {{ $t("add") }}
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
        span.tw-cursor-pointer(class='hover:tw-text-primary')
          b-icon.tw-mr-2(icon='pencil')
        span.tw-cursor-pointer(class='hover:tw-text-primary')
          b-icon(icon='account-details')
</template>

<script>
export default {
  name: 'MaintainProfile',
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
.maintain-profile-wrapper {
}
</style>

<style lang="scss">
.maintain-profile-wrapper {
  input.input {
    height: px2rem(25);
  }
}
</style>
