<template lang="pug">
.menu-colaborador-wrapper
  b-menu-list(label='Menu Colaborador')
    b-menu-item.tw-py-1.tw-w-100(icon='account', :label='$t("myProfile")')
    b-menu-item.tw-py-1.tw-w-100(
      icon='account-key',
      :label='$t("accessRequest")'
    )
</template>

<script>
export default {
  name: 'MenuColaborador',
  components: {},
  props: {},
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
.menu-colaborador-wrapper {
}
</style>
