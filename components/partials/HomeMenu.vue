<template lang="pug">
#homeMenu.home-menu-wrapper
  b-menu-list(label='Menu')
    b-menu-item.tw-text-xs.tw-py-1.tw-w-100(
      v-for='(current, index) in currentMenu',
      :icon='current.icon',
      :label='$t(current.label)',
      :key='index',
      @click='proccessPartial(current.partial)'
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
  methods: {
    proccessPartial(partial) {
      if (partial === 'AssignmentOfProfile') {
        this.$store.commit('changeSelectedProfileId', null)
        this.$store.commit('changeUserProfiles', [{}])
      }
      this.changePartial(partial)
    },
  },
}
</script>

<style lang="scss" scoped>
.home-menu-wrapper {
}
</style>
