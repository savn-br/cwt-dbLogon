export default {
  async updateAccess({ state, commit }) {
    const { data } = await this.$axios.put(`/access/${state.userData.userId}`, {
      ...state.userData,
    })
    commit('changeUserStatus', data.status)
    commit('changeUserData', data)
  },

  async getAccess({ state, commit }) {
    const { data } = await this.$axios.get(`/access/${state.userData.userId}`)
    commit('changeUserStatus', data.status)
    commit('changeUserData', data)
  },

  async updateMyProfile({ state, commit }) {
    const { data } = await this.$axios.put(
      `/myProfile/${state.userData.userId}`,
      {
        ...state.userData,
      }
    )
    commit('changePointOfSales', data.pointOfSales)
    commit('changeProfileAccess', data.profileAccess)
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
