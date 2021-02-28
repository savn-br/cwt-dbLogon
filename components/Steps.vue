<template lang="pug">
.steps-wrapper.tw-mt-6
  b-steps(:has-navigation='false', v-model='steps')
    b-step-item(:label='$t("unauthorized")', icon='account-cancel')
    b-step-item(:label='$t("inProgress")', icon='account')
    b-step-item(:label='$t("approved")', icon='account-plus')
</template>

<script>
export default {
  data() {
    return { steps: 1 }
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
}
</style>
