import showToast from '@/utils/toast'
export default {
  async getAllPointOfSales({ state, commit }) {
    try {
      const { data: allPointOfSales } = await this.$axios.get(
        `/pointOfSale/SearchAll`
      )

      commit('setAllPointOfSales', allPointOfSales.data)
    } catch (error) {
      console.error(error)
    }
  },
  async setActivateUser({ state, commit }, { active, userId }) {
    try {
      const { data: newUser } = await this.$axios.put(
        `/activateUser/${userId}/${active}`
      )
      commit('setActivateUsersElement', newUser.data[0])
    } catch (error) {
      console.error(error)
    }
  },
  async getActivateUsers({ state, commit }) {
    try {
      // const response = await this.$axios.get(
      //   `/activateUser/${state.userData.userId}/false`
      // )
      const { data: activateUsers } = await this.$axios.get(
        `/activateUser/UMXR701/false`
      )
      commit('setActivateUsers', activateUsers.data)
    } catch (error) {
      console.error(error)
    }
  },
  async getSelectedProfileData({ state, commit }) {
    try {
      const { data: profileData } = await this.$axios.get(
        `/profile/${state.selectedProfileId}`
      )
      commit('setSelectedProfileData', profileData.data)
    } catch (error) {
      console.log(error)
    }
  },
  async removePointOfSale2Collaborator({ state, commit }, { pointOfSaleId }) {
    try {
      const { status } = await this.$axios.delete(
        `/userPointOfSale/${state.selectedCollaborator.userId}/${pointOfSaleId}`
      )
      if (status === 200) {
        commit('deletePointOfSale', pointOfSaleId)
      }
    } catch (error) {
      console.error(error)
    }
  },
  async setPointOfSale2Collaborator({ state }, { pointOfSaleId }) {
    try {
      await this.$axios.post(`/userPointOfSale/`, {
        pointOfSaleId,
        userId: state.selectedCollaborator.userId,
      })
    } catch (error) {
      console.error(error)
    }
  },
  async getAvailablePointOfSales({ state, commit }) {
    try {
      const { data: pointOfSales } = await this.$axios.get(
        `/userPointOfSale/SearchAll/${state.userData.userId}/`
      )
      commit('setAvailablePointOfSales', pointOfSales.data)
    } catch (error) {
      console.error(error)
    }
  },
  async setProfile2Collaborator({ state }, { profileId }) {
    try {
      await this.$axios.post(`/userProfile/`, {
        userId: state.selectedCollaborator.userId,
        profileId,
      })
    } catch (error) {
      console.error(error)
    }
  },
  async getAvailableProfiles({ state, commit }) {
    try {
      commit('setSearchProfileLoading', true)
      const { data: profiles } = await this.$axios.get(
        `/profile/SearchAll/${state.userData.userId}/${state.searchProfileId}`
      )
      commit('setAvailableProfiles', profiles.data)
      commit('setSearchProfileLoading', false)
    } catch (error) {
      console.error(error)
    }
  },

  async setProfileState2Collaborator({ state }, { active, profileId }) {
    try {
      await this.$axios.put(
        `/userProfile/${state.selectedCollaborator.userId}/${profileId}/${active}`
      )
    } catch (error) {
      console.error(error)
    }
  },
  async getAvailableCollaborators({ state, commit }) {
    try {
      commit('setSearchCollaboratorLoading', true)
      const { data: collaborators } = await this.$axios.get(
        `/assignProfile/${state.searchCollaboratorId}`
      )
      // const { data: collaborators } = await this.$axios.get(
      //   `/assignProfile/${'ULXF214'}`
      // )
      commit('setCollaborators', collaborators.data)
      commit('setSelectedCollaborator', collaborators.data[0])
      commit('setSearchCollaboratorLoading', false)
    } catch (error) {
      console.error(error)
    }
  },
  async getRequests({ commit }) {
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
      commit('setSelectedModuleTerm', {
        key: 'transactions',
        value: transactions.data,
      })
    } catch (error) {
      console.error(error)
    }
  },
  async saveTransaction({ state }) {
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
  async saveModule({ state }) {
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
      commit('setSelectedSystemTerm', { key: 'modules', value: modules.data })
    } catch (error) {
      console.error(error)
    }
  },
  async saveSystem({ state }) {
    try {
      const response = await this.$axios.post(`/system/`, state.selectedSystem)
      return response.status
    } catch (error) {
      console.error(error)
    }
  },
  async editSystem({ state }) {
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
  async getSystems({ commit }) {
    try {
      const { data: systems } = await this.$axios.get(`/system/SearchAll/`)
      commit('setSystems', systems.data)
    } catch (error) {
      console.error(error)
    }
  },
  async handleEnableAccess({ state, commit }) {
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
  async handleUpdateAccess({ state, commit }) {
    try {
      const response = await this.$axios.put(
        `/access/${state.userData.userId}`,
        {
          ...state.userData,
        }
      )
      const { data: responseData } = response
      commit('setUserStatus', responseData.data.status)
      commit('updateUserData', responseData.data)
      return response.status
    } catch (error) {
      console.error(error)
    }
  },
  async handleGetAccess({ state, commit }) {
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
  async handleUpdateMyProfile({ state, commit }) {
    try {
      const { data: responseData, status } = await this.$axios.put(
        `/myProfile/${state.userData.userId}`,
        {
          ...state.userData,
        }
      )
      showToast(status, responseData.message)

      commit('setPointOfSales', responseData.data.pointOfSales)
      commit('setProfileAccess', responseData.data.profileAccess)
      commit('setUserData', responseData.data)
    } catch (error) {
      console.error(error)
    }
  },
  async handleUpdateProfile({ state, commit }) {
    try {
      const body = { ...state.selectedCollaborator }
      delete body.pointOfSales
      delete body.profiles

      const { data: responseData } = await this.$axios.put(
        `/myProfile/${state.selectedCollaborator.userId}`,
        body
      )
      commit('updateSelectedCollaborator', responseData.data)
    } catch (error) {
      console.error(error)
    }
  },
  async handleGetMyProfile({ state, commit }) {
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
