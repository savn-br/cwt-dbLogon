<template lang="pug">
.steps-wrapper.tw-mt-10
  b-steps(:has-navigation='false', v-model='steps', size='is-small')
    b-step-item(
      :label='$t("unauthorized")',
      icon='account-cancel',
      :clickable='false'
    )
    b-step-item(:label='$t("inProgress")', icon='account', :clickable='false')
    b-step-item(
      :label='$t("approved")',
      icon='account-plus',
      :clickable='false'
    )
</template>

<script>
export default {
  props: {
    steps: {
      type: Number,
      default: () => 0,
    },
  },
  data() {
    return {}
  },
  computed: {},
  watch: {},
  mounted() {},
  created() {},
  methods: {},
}
</script>

<style lang="scss" scoped>
.steps-wrapper {
  max-width: px2rem(600);
  margin-left: auto;
  margin-right: auto;
}
</style>
