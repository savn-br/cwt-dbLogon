<template lang="pug">
b-menu
  b-menu-list(label='Usuários')

  b-menu-list(label='Perfil')

  b-menu-list(label='Etc..')
</template>

<script>
export default {
  name: 'SideBar',
  data() {
    return {}
  },
  computed: {},
}
</script>
<style scoped>
.menu {
  font-size: 0.8rem;
}
.menu-list >>> a.is-active {
  background-color: rgb(32, 108, 107);
}
</style>
