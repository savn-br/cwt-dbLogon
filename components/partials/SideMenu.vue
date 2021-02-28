<template lang="pug">
.side-menu-wrapper.tw-pt-4
  b-menu.tw-fixed.tw-flex(class='md:tw-block')
    component(:is='menuType')

    //-   b-menu-item(icon='settings', :active='isActive', expanded)
    //-     template(#label='props')
    //-       | Administrator
    //-       b-icon.is-pulled-right(
    //-         :icon='props.expanded ? "menu-down" : "menu-up"'
    //-       )
    //-     b-menu-item(icon='account', label='Users')
    //-     b-menu-item(icon='cellphone-link')
    //-       template(#label='')
    //-         | Devices
    //-         b-dropdown.is-pulled-right(
    //-           aria-role='list',
    //-           position='is-bottom-left'
    //-         )
    //-           template(#trigger='')
    //-             b-icon(icon='dots-vertical')
    //-           b-dropdown-item(aria-role='listitem') Action
    //-           b-dropdown-item(aria-role='listitem') Another action
    //-           b-dropdown-item(aria-role='listitem') Something else
    //-     b-menu-item(icon='cash-multiple', label='Payments', disabled='')
    //-   b-menu-item(icon='account', label='My Account')
    //-     b-menu-item(label='Account data')
    //-     b-menu-item(label='Addresses')
    //- b-menu-list
    //-   b-menu-item(
    //-     label='Expo',
    //-     icon='link',
    //-     tag='router-link',
    //-     target='_blank',
    //-     to='/expo'
    //-   )
</template>

<script>
export default {
  name: 'SideMenu',
  components: {
    MenuGestor: () => import('@/components/partials/MenuGestor'),
    MenuAdministrador: () => import('@/components/partials/MenuAdministrador'),
    MenuColaborador: () => import('@/components/partials/MenuColaborador'),
    MenuAnalista: () => import('@/components/partials/MenuAnalista'),
  },
  props: {
    menuType: { type: String, default: () => '' },
  },
  data() {
    return {
      isActive: true,
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
.side-menu-wrapper {
  width: 100%;
}
</style>
