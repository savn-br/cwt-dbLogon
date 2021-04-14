export default {
  async getAssignProfile({ state, commit }) {
    try {
      const { data: profiles } = await this.$axios.get(
        `/assignProfile/${state.searchProfileId}`
      )
      // const { data: profiles } = await this.$axios.get(
      //   `/assignProfile/${'ULXF214'}`
      // )
      commit('setUserProfiles', profiles.data)
      commit('setSelectedProfile', profiles.data[0])
    } catch (error) {
      console.error(error)
    }
  },
  async getRequests({ state, commit }) {
    try {
      // const { data: requests } = await this.$axios.get(
      //   `/dashManager/${state.dataUser.userId}`
      // )
      const { data: requests } = await this.$axios.get(`/dashManager/${'Us1M'}`)
      commit('setRequests', requests.data)
    } catch (error) {
      console.error(error)
    }
  },
  async getTransactions({ state, commit }) {
    try {
      const { data: transactions } = await this.$axios.get(
        `/transaction/SearchAll/${state.selectedSystem.systemId}/${state.selectedModule.moduleId}/`
      )
      commit('setSelectedModuleTransactions', transactions.data)
    } catch (error) {
      console.error(error)
    }
  },
  async saveTransaction({ state, dispatch }) {
    try {
      const response = await this.$axios.post(`/transaction/`, {
        ...state.selectedTransaction,
        systemId: state.selectedSystem.systemId,
        moduleId: state.selectedModule.moduleId,
      })
      return response.status
    } catch (error) {
      console.error(error)
    }
  },
  async editTransaction({ state }) {
    try {
      const response = await this.$axios.put(
        `/transaction/${state.selectedSystem.systemId}/${state.selectedModule.moduleId}/${state.selectedTransaction.transactionId}/`,
        state.selectedTransaction
      )
      return response.status
    } catch (error) {
      console.error(error)
    }
  },
  async saveModule({ state, dispatch }) {
    try {
      const response = await this.$axios.post(`/module/`, {
        ...state.selectedModule,
        systemId: state.selectedSystem.systemId,
      })
      return response.status
    } catch (error) {
      console.error(error)
    }
  },
  async editModule({ state }) {
    try {
      const response = await this.$axios.put(
        `/module/${state.selectedSystem.systemId}/${state.selectedModule.moduleId}/`,
        state.selectedModule
      )
      return response.status
    } catch (error) {
      console.error(error)
    }
  },
  async getModules({ state, commit }) {
    try {
      const { data: modules } = await this.$axios.get(
        `/module/SearchAll/${state.selectedSystem.systemId}/`
      )
      commit('setSelectedSystemModules', modules.data)
    } catch (error) {
      console.error(error)
    }
  },
  async saveSystem({ state, dispatch }) {
    try {
      const response = await this.$axios.post(`/system/`, state.selectedSystem)
      return response.status
    } catch (error) {
      console.error(error)
    }
  },
  async editSystem({ state, dispatch }) {
    try {
      const response = await this.$axios.put(
        `/system/${state.selectedSystem.systemId}`,
        state.selectedSystem
      )
      return response.status
    } catch (error) {
      console.error(error)
    }
  },
  async getSystems({ state, commit }) {
    try {
      const { data: systems } = await this.$axios.get(`/system/SearchAll/`)
      commit('setSystems', systems.data)
    } catch (error) {
      console.error(error)
    }
  },
  async enableAccess({ state, commit }) {
    try {
      const { data: responseData } = await this.$axios.post(
        `/access/${state.userData.userId}`
      )
      commit('setUserStatus', responseData.data.status)
      commit('setUserData', responseData.data)
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
      commit('setUserStatus', responseData.data.status)
      commit('setUserData', responseData.data)
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
      commit('setUserStatus', responseData.data.status)
      commit('setUserData', responseData.data)
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
      commit('setPointOfSales', responseData.data.pointOfSales)
      commit('setProfileAccess', responseData.data.profileAccess)
      commit('setUserData', responseData.data)
    } catch (error) {
      console.error(error)
    }
  },

  async getMyProfile({ state, commit }) {
    try {
      const { data: responseData } = await this.$axios.get(
        `/myProfile/${state.userData.userId}`
      )
      commit('setPointOfSales', responseData.data.pointOfSales)
      commit('setProfileAccess', responseData.data.profileAccess)
      commit('setUserData', responseData.data)
    } catch (error) {
      console.error(error)
    }
  },
}
