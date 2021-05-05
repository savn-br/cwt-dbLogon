import showToast from '@/utils/toast'
export default {
  async handleUpdateProfileDataTerm({ state: { selectedProfileData } }, term) {
    try {
      const body = { ...selectedProfileData, ...term }
      const { profileId } = selectedProfileData
      delete body.profileAccess
      const { status } = await this.$axios.put(`/profile/${profileId}`, body)
      if (status === 200) {
        showToast(this.$i18n.t('successMessage'), 'is-success')
      } else {
        showToast('Não foi possível realizar a operação', 'is-danger')
      }
    } catch (error) {
      console.error(error)
    }
  },
  async getAllPointOfSales({ state, commit }) {
    try {
      const {
        data: { data },
      } = await this.$axios.get(`/pointOfSale/SearchAll`)

      commit('setAllPointOfSales', data)
    } catch (error) {
      console.error(error)
    }
  },
  async setActivateUser({ state, commit }, { active, userId }) {
    try {
      const {
        data: { data },
        status,
      } = await this.$axios.put(`/activateUser/${userId}/${active}`)
      if (status === 200) {
        showToast(this.$i18n.t('successMessage'), 'is-success')
        commit('setActivateUsersElement', data[0])
      } else {
        showToast(data.message, 'is-danger')
      }
    } catch (error) {
      console.error(error)
    }
  },
  async getActivateUsers({
    state: {
      userData: { userId },
    },
    commit,
  }) {
    try {
      const {
        data: { data },
      } = await this.$axios.get(`/activateUser/${userId}/false`)
      commit('setActivateUsers', data)
    } catch (error) {
      console.error(error)
    }
  },
  async getSelectedProfileData({ state: { selectedProfileId }, commit }) {
    try {
      const {
        data: { data },
      } = await this.$axios.get(`/profile/${selectedProfileId}`)
      commit('setSelectedProfileData', data)
    } catch (error) {
      console.log(error)
    }
  },
  async removePointOfSale2Collaborator(
    {
      state: {
        selectedCollaborator: { userId },
      },
      commit,
    },
    { pointOfSaleId }
  ) {
    try {
      const { status } = await this.$axios.delete(
        `/userPointOfSale/${userId}/${pointOfSaleId}`
      )
      if (status === 200) {
        commit('deletePointOfSaleOnCollaborator', pointOfSaleId)
      }
    } catch (error) {
      console.error(error)
    }
  },
  async setPointOfSale2Collaborator(
    {
      state: {
        selectedCollaborator: { userId },
      },
    },
    { pointOfSaleId }
  ) {
    try {
      await this.$axios.post(`/userPointOfSale/`, {
        pointOfSaleId,
        userId,
      })
    } catch (error) {
      console.error(error)
    }
  },
  async getAvailablePointOfSales({
    state: {
      userData: { userId },
    },
    commit,
  }) {
    try {
      const {
        data: { data },
      } = await this.$axios.get(`/userPointOfSale/SearchAll/${userId}/`)
      commit('setAvailablePointOfSales', data)
    } catch (error) {
      console.error(error)
    }
  },
  async setProfile2Collaborator(
    {
      state: {
        selectedCollaborator: { userId },
      },
    },
    { profileId }
  ) {
    try {
      const {
        status,
        data: { message },
      } = await this.$axios.post(`/userProfile/`, {
        userId,
        profileId,
      })
      if (status === 200) {
        showToast(this.$i18n.t('successMessage'), 'is-success')
      } else {
        showToast(message, 'is-danger')
      }
    } catch (error) {
      console.error(error)
    }
  },
  async getAvailableProfiles({
    state: {
      userData: { userId },
      searchProfileId,
    },
    commit,
  }) {
    try {
      commit('setSearchProfileLoading', true)

      const {
        data: { data },
      } = await this.$axios.get(
        `/profile/SearchAll/${userId}/${searchProfileId}`
      )
      commit('setAvailableProfiles', data)
      commit('setSearchProfileLoading', false)
    } catch (error) {
      console.error(error)
    }
  },
  async setProfileState2Collaborator(
    {
      state: {
        selectedCollaborator: { userId },
      },
      commit,
    },
    { active, profileId }
  ) {
    try {
      const {
        data: { data, message },
        status,
      } = await this.$axios.put(`/userProfile/${userId}/${profileId}/${active}`)
      commit('updateProfileOnCollaborator', { profileId, value: data })
      if (status === 200) {
        showToast(this.$i18n.t('successMessage'), 'is-success')
      } else {
        showToast(message, 'is-danger')
      }
    } catch (error) {
      console.error(error)
    }
  },
  async getAvailableCollaborators({ state: { searchCollaboratorId }, commit }) {
    try {
      commit('setSearchCollaboratorLoading', true)
      const {
        data: { data },
        status,
      } = await this.$axios.get(`/assignProfile/${searchCollaboratorId}`)
      if (status === 200) {
        commit('setCollaborators', data)
        const phone = data[0].phone.replace(/[^\d]/g, '')
        commit('setSelectedCollaborator', { ...data[0], phone })
      }
      commit('setSearchCollaboratorLoading', false)
    } catch (error) {
      console.error(error)
    }
  },
  async getRequests({
    state: {
      userData: { userId },
    },
    commit,
  }) {
    try {
      const {
        data: { data },
      } = await this.$axios.get(`/dashManager/${userId}`)
      commit('setRequests', data)
    } catch (error) {
      console.error(error)
    }
  },
  async getTransactions({
    state: {
      selectedSystem: { systemId },
      selectedModule: { moduleId },
    },
    commit,
  }) {
    try {
      const {
        data: { data },
      } = await this.$axios.get(
        `/transaction/SearchAll/${systemId}/${moduleId}/`
      )
      commit('setSelectedModuleTerm', {
        key: 'transactions',
        value: data,
      })
    } catch (error) {
      console.error(error)
    }
  },
  async saveTransaction({
    state: {
      selectedTransaction,
      selectedSystem: { systemId },
      selectedModule: { moduleId },
    },
  }) {
    try {
      const { status } = await this.$axios.post(`/transaction/`, {
        ...selectedTransaction,
        systemId,
        moduleId,
      })
      return status
    } catch (error) {
      console.error(error)
    }
  },
  async editTransaction({
    state: {
      selectedSystem: { systemId },
      selectedModule: { moduleId },
      selectedTransaction,
    },
  }) {
    try {
      const { transactionId } = selectedTransaction
      const { status } = await this.$axios.put(
        `/transaction/${systemId}/${moduleId}/${transactionId}/`,
        selectedTransaction
      )
      return status
    } catch (error) {
      console.error(error)
    }
  },
  async saveModule({
    state: {
      selectedModule,
      selectedSystem: { systemId },
    },
  }) {
    try {
      const { status } = await this.$axios.post(`/module/`, {
        ...selectedModule,
        systemId,
      })
      return status
    } catch (error) {
      console.error(error)
    }
  },
  async editModule({
    state: {
      selectedModule,
      selectedSystem: { systemId },
    },
  }) {
    try {
      const { moduleId } = selectedModule
      const { status } = await this.$axios.put(
        `/module/${systemId}/${moduleId}/`,
        selectedModule
      )
      return status
    } catch (error) {
      console.error(error)
    }
  },
  async getModules({
    state: {
      selectedSystem: { systemId },
    },
    commit,
  }) {
    try {
      const {
        data: { data },
      } = await this.$axios.get(`/module/SearchAll/${systemId}/`)
      commit('setSelectedSystemTerm', { key: 'modules', value: data })
    } catch (error) {
      console.error(error)
    }
  },
  async saveSystem({ state: { selectedSystem } }) {
    try {
      const { status } = await this.$axios.post(`/system/`, selectedSystem)
      return status
    } catch (error) {
      console.error(error)
    }
  },
  async editSystem({ state: { selectedSystem } }) {
    try {
      const { systemId } = selectedSystem
      const { status } = await this.$axios.put(
        `/system/${systemId}`,
        selectedSystem
      )
      return status
    } catch (error) {
      console.error(error)
    }
  },
  async getSystems({ commit }) {
    try {
      const {
        data: { data },
      } = await this.$axios.get(`/system/SearchAll/`)
      commit('setSystems', data)
    } catch (error) {
      console.error(error)
    }
  },
  async handleEnableAccess({
    state: {
      userData: { userId },
    },
    commit,
  }) {
    try {
      const {
        data: { data },
      } = await this.$axios.post(`/access/${userId}`)
      commit('setUserStatus', data.status)
      commit('setUserData', data)
    } catch (error) {
      console.error(error)
    }
  },
  async handleUpdateAccess({ state: { userData }, commit }) {
    try {
      const { userId } = userData
      const {
        data: { data },
        status,
      } = await this.$axios.put(`/access/${userId}`, {
        ...userData,
      })
      commit('setUserStatus', data.status)
      commit('updateUserData', data)
      return status
    } catch (error) {
      console.error(error)
    }
  },
  async handleGetAccess({
    state: {
      userData: { userId },
    },
    commit,
  }) {
    try {
      const {
        data: { data },
      } = await this.$axios.get(`/access/${userId}`)
      commit('setUserStatus', data.status)
      commit('setUserData', data)
    } catch (error) {
      console.error(error)
    }
  },
  async handleUpdateMyProfile({ state: { userData }, commit }) {
    try {
      const { userId } = userData
      const {
        data: { data, message },
        status,
      } = await this.$axios.put(`/myProfile/${userId}`, {
        ...userData,
      })
      if (status === 200) {
        showToast(this.$i18n.t('successMessage'), 'is-success')
      } else {
        showToast(message, 'is-danger')
      }

      commit('setPointOfSales', data.pointOfSales)
      commit('setProfileAccess', data.profileAccess)
      commit('setUserData', data)
    } catch (error) {
      console.error(error)
    }
  },
  async handleUpdateProfile({ state: { selectedCollaborator }, commit }) {
    try {
      const { userId } = selectedCollaborator
      const body = { ...selectedCollaborator }
      delete body.pointOfSales
      delete body.profiles

      const {
        data: { data, message },
        status,
      } = await this.$axios.put(`/myProfile/${userId}`, body)
      if (status === 200) {
        showToast(this.$i18n.t('successMessage'), 'is-success')
        const phone = data.phone.replace(/[^\d]/g, '')
        commit('updateSelectedCollaborator', { ...data, phone })
      } else {
        showToast(message, 'is-danger')
      }
    } catch (error) {
      console.error(error)
    }
  },
  async handleGetMyProfile({
    state: {
      userData: { userId },
    },
    commit,
  }) {
    try {
      const {
        data: { data },
      } = await this.$axios.get(`/myProfile/${userId}`)
      const phone = data.phone.replace(/[^\d]/g, '')
      commit('setPointOfSales', data.pointOfSales)
      commit('setProfileAccess', data.profileAccess)
      commit('setUserData', {
        ...data,
        phone,
      })
    } catch (error) {
      console.error(error)
    }
  },
}
