export default {
  async getAccess({ state, commit }) {
    const { data } = await this.$axios.get(`/access/${state.userData.userId}`)
    commit('changeUserStatus', data.status)
    commit('changeUserData', data)
  },
  async getMyProfile({ state, commit }) {
    const { data } = await this.$axios.get(
      `/myProfile/${state.userData.userId}`
    )
    commit('changePointOfSales', data.pointOfSales)
    commit('changeProfileAccess', data.profileAccess)
    commit('changeUserData', data)
  },
}
