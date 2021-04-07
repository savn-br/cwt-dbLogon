export default {
  async enableAccess({ state, commit }) {
    try {
      const { data: responseData } = await this.$axios.post(
        `/access/${state.userData.userId}`
      )
      commit('changeUserStatus', responseData.data.status)
      commit('changeUserData', responseData.data)
    } catch (error) {
      console.error(error)
    }
  },
  async updateAccess({ state, commit }) {
    try {
      const response = await this.$axios.put(
        `/access/${state.userData.userId}`,
        {
          ...state.userData,
        }
      )
      const { data: responseData } = response
      commit('changeUserStatus', responseData.data.status)
      commit('changeUserData', responseData.data)
      return response.status
    } catch (error) {
      console.error(error)
    }
  },

  async getAccess({ state, commit }) {
    try {
      const { data: responseData } = await this.$axios.get(
        `/access/${state.userData.userId}`
      )
      commit('changeUserStatus', responseData.data.status)
      commit('changeUserData', responseData.data)
    } catch (error) {
      console.error(error)
    }
  },

  async updateMyProfile({ state, commit }) {
    try {
      const { data: responseData } = await this.$axios.put(
        `/myProfile/${state.userData.userId}`,
        {
          ...state.userData,
        }
      )
      commit('changePointOfSales', responseData.data.pointOfSales)
      commit('changeProfileAccess', responseData.data.profileAccess)
      commit('changeUserData', responseData.data)
    } catch (error) {
      console.error(error)
    }
  },

  async getMyProfile({ state, commit }) {
    try {
      const { data: responseData } = await this.$axios.get(
        `/myProfile/${state.userData.userId}`
      )
      commit('changePointOfSales', responseData.data.pointOfSales)
      commit('changeProfileAccess', responseData.data.profileAccess)
      commit('changeUserData', responseData.data)
    } catch (error) {
      console.error(error)
    }
  },
}
