export default {
  methods: {
    setPartial(partialName) {
      window.scrollTo(0, 0)
      this.$store.commit('setCurrentPartial', partialName)
      this.closeNavbar()
    },
    closeNavbar() {
      const burgerMenu = document.querySelector('.navbar-burger.burger')
      const mouseEventClick = new MouseEvent('click')
      burgerMenu.dispatchEvent(mouseEventClick)
    },
  },
}
