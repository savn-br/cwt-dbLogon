<template lang="pug">
#profileSearch.profile-search-wrapper.tw-mt-6.tw-px-8
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
    b-table-column(:label='$t("operation")', :centered='true')
      span.tw-cursor-pointer
        b-icon(icon='account-details')
</template>

<script>
export default {
  name: 'ProfileSearch',
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
.profile-search-wrapper {
}
</style>

<style lang="scss">
.profile-search-wrapper {
  input.input {
    height: px2rem(25);
  }
}
</style>
