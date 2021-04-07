<template lang="pug">
#homeMenu.home-menu-wrapper
  b-menu-list(label='Menu')
    b-menu-item.tw-text-xs.tw-py-1.tw-w-100(
      v-for='(current, index) in currentMenu',
      :icon='current.icon',
      :label='$t(current.label)',
      :key='index',
      @click='changePartial(current.partial)'
    )
</template>

<script>
import { mapState } from 'vuex'
import changeMenu from '~/mixins/changeMenu'
export default {
  name: 'HomeMenu',
  components: {},
  mixins: [changeMenu],
  props: {},
  data() {
    return {}
  },
  computed: {
    ...mapState({
      currentMenu: (state) => state.currentMenu,
    }),
  },
  watch: {},
  mounted() {},
  created() {},
  methods: {},
}
</script>

<style lang="scss" scoped>
.home-menu-wrapper {
}
</style>
