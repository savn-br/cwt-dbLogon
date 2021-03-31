export default {
  async enableAccess({ state, commit }) {
    const { data: responseData } = await this.$axios.post(
      `/access/${state.userData.userId}`
    )
    commit('changeUserStatus', responseData.data.status)
    commit('changeUserData', responseData.data)
  },
  async updateAccess({ state, commit }) {
    const { data: responseData } = await this.$axios.put(
      `/access/${state.userData.userId}`,
      {
        ...state.userData,
      }
    )
    commit('changeUserStatus', responseData.data.status)
    commit('changeUserData', responseData.data)
  },

  async getAccess({ state, commit }) {
    const { data: responseData } = await this.$axios.get(
      `/access/${state.userData.userId}`
    )
    commit('changeUserStatus', responseData.data.status)
    commit('changeUserData', responseData.data)
  },

  async updateMyProfile({ state, commit }) {
    const { data: responseData } = await this.$axios.put(
      `/myProfile/${state.userData.userId}`,
      {
        ...state.userData,
      }
    )
    commit('changePointOfSales', responseData.data.pointOfSales)
    commit('changeProfileAccess', responseData.data.profileAccess)
    commit('changeUserData', responseData.data)
  },

  async getMyProfile({ state, commit }) {
    const { data: responseData } = await this.$axios.get(
      `/myProfile/${state.userData.userId}`
    )
    commit('changePointOfSales', responseData.data.pointOfSales)
    commit('changeProfileAccess', responseData.data.profileAccess)
    commit('changeUserData', responseData.data)
  },
}
