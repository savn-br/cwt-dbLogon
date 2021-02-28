<template lang="pug">
.steps-wrapper.tw-mt-6
  b-steps(:has-navigation='false', v-model='steps')
    b-step-item(label='Não Autorizado', icon='account-cancel')
    b-step-item(label='Em Andamento', icon='account')
    b-step-item(label='Aprovado', icon='account-plus')
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
