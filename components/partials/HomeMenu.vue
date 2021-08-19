<template lang="pug">
#homeMenu.home-menu-wrapper
  b-menu-list(label='Menu')
    b-menu-item.tw-text-xs.tw-py-1.tw-w-100(
      v-for='(current, index) in currentMenu',
      :icon='current.icon',
      :label='$t(current.label)',
      :key='index',
      :active='isActive(current)',
      @click='proccessPartial(current.partial)'
    )
</template>

<script>
import { mapState } from 'vuex'
import setMenu from '~/mixins/setMenu'
export default {
  name: 'HomeMenu',
  components: {},
  mixins: [setMenu],
  props: {},
  data() {
    return {}
  },
  computed: {
    ...mapState({
      currentMenu: (state) => state.currentMenu,
      lastMenuLabel: (state) => state.lastMenuLabel,
    }),
  },
  watch: {},
  mounted() {},
  created() {},
  methods: {
    isActive(current) {
      return current.label === this.lastMenuLabel
    },
    proccessPartial(partial) {
      if (partial === 'AssignmentOfProfile') {
        this.$store.commit('setCollaborators', [{}])
      }
      this.setPartial(partial)
    },
  },
}
</script>

<style lang="scss" scoped>
.home-menu-wrapper {
}
</style>
