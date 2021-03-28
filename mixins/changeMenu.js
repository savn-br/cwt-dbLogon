export default {
  methods: {
    changePartial(partialName) {
      this.$store.commit('changeCurrentPartial', partialName)
      this.closeNavbar()
    },
    closeNavbar() {
      const burgerMenu = document.querySelector('.navbar-burger.burger')
      const mouseEventClick = new MouseEvent('click')
      burgerMenu.dispatchEvent(mouseEventClick)
    },
  },
}
