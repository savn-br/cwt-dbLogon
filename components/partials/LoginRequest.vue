<template lang="pug">
.login-request-wrapper.tw-px-4
  steps
  profile-form(:data='profile')
  .update-buttons.tw-flex.tw-justify-center(class='sm:tw-justify-end')
    b-button.tw-mx-2(type='is-success') {{ $t("update") }}
    b-button.tw-mx-2(type='is-primary') {{ $t("requestAccess") }}
  .logs.tw-mt-2.tw-mb-4
    h1 Status
    standard-table(:data='data', , :bordered='true')
      b-table-column(field='date', :label='$t("date")', v-slot='props')
        span.tw-text-xs {{ props.row.date }}
      b-table-column(field='action', :label='$t("action")', v-slot='props')
        span.tw-text-xs {{ props.row.action }}
</template>

<script>
export default {
  name: 'LoginRequest',
  components: {
    StandardTable: () => import('@/components/StandardTable'),
    ProfileForm: () => import('@/components/partials/ProfileForm'),
  },
  data() {
    const table = Object.assign(require('@/jsons/status-table-data.json'))
    return {
      profile: require('@/jsons/profile-data.json'),
      ...table,
    }
  },
  computed: {
    Steps: () => import('@/components/Steps'),
  },
  watch: {},
  mounted() {},
  created() {},
  methods: {},
}
</script>

<style lang="scss" scoped>
.login-request-wrapper {
  .fields {
    grid-template-columns: repeat(auto-fill, minmax(px2rem(300), 1fr));
    @media screen and(min-width: px2rem(1500)) {
      grid-template-columns: repeat(4, minmax(px2rem(300), 1fr));
    }
  }
}
</style>

<style lang="scss">
.login-request-wrapper {
  label {
    font-size: 0.75rem;
  }
}
</style>
