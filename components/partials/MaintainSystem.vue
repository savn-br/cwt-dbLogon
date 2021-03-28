<template lang="pug">
#maintainSystem.maintain-system-wrapper.tw-mt-8.tw-px-8
  b-modal(v-model='isModalActive')
    template(#default='props')
      maintain-system-modal(@close='props.close')
  .buttons-wrapper.tw-flex.tw-justify-end.tw-mb-2
    b-button(type='is-primary', @click='isModalActive = true') {{ $t("add") }}
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
      span(v-if='props.row.active')
        b-icon(icon='check')
      span(v-else)
        b-icon(icon='close')
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
          b-icon.tw-mr-2(icon='account-details')
        span.tw-cursor-pointer(class='hover:tw-text-primary')
          b-icon.tw-mr-2(icon='clipboard-text')
        span.tw-cursor-pointer(class='hover:tw-text-primary')
          b-icon(icon='eye')
</template>

<script>
export default {
  name: 'MaintainSystem',
  components: {
    StandardTable: () => import('@/components/StandardTable'),
    MaintainSystemModal: () =>
      import('@/components/partials/MaintainSystemModal'),
  },
  props: {},
  data() {
    return {
      isModalActive: false,
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
.maintain-system-wrapper {
}
</style>

<style lang="scss">
.maintain-system-wrapper {
  input.input {
    height: px2rem(25);
  }
}
</style>
