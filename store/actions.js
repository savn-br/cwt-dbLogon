import showToast from '@/utils/toast'
export default {
  async getAvailableCollaborator({ state, commit }) {
    try {
      commit('setIsLoading', true)
      const {
        data: { data },
        status,
      } = await this.$axios.get(
        `/assignProfile/GetById/${state.selectedCollaborator.userId}`
      )
      if (status === 200) {
        commit('setSelectedCollaborator', data[0])
      }
    } catch (error) {
      console.error(error)
    } finally {
      commit('setIsLoading', false)
    }
  },
  async getUsersByManagerId({ state: { userData }, commit }) {
    try {
      const { userId } = userData
      commit('setIsLoading', true)
      const {
        data: { data },
      } = await this.$axios.get(
        `/approvalDelegation/SearchUsersByManagerId/${userId}`
      )
      commit('setSearchUsersByManager', data)
    } catch (error) {
      console.error(error)
    } finally {
      commit('setIsLoading', false)
    }
  },
  async setApprovalDelegation({ state, commit, dispatch }, { userId }) {
    try {
      commit('setIsLoading', true)
      const { status } = await this.$axios.put(`/approvalDelegation/${userId}`)
      dispatch('getApprovalDelegationList')
      if (status === 200) {
        showToast(this.$i18n.t('successMessage'), 'is-success')
      } else {
        showToast('Não foi possível realizar a operação', 'is-danger')
      }
    } catch (error) {
      console.error(error)
    } finally {
      commit('setIsLoading', false)
    }
  },
  async createApprovalDelegation({
    state: { approvalDelegation, userData },
    commit,
    dispatch,
  }) {
    try {
      const { beginTermDate, endTermDate } = approvalDelegation
      const { userId } = userData
      const body = {
        ...approvalDelegation,
        userId,
        beginTermDate: beginTermDate
          ? this.$moment(beginTermDate).format('DD/MM/YYYY')
          : this.$moment().format('DD/MM/YYYY'),
        endTermDate: endTermDate
          ? this.$moment(endTermDate).format('DD/MM/YYYY')
          : '',
      }
      commit('setIsLoading', true)
      const {
        status,
        data: { message },
      } = await this.$axios.post(`/approvalDelegation/`, body)
      if (status === 200) {
        showToast(this.$i18n.t('successMessage'), 'is-success')
      } else {
        showToast(message, 'is-danger')
      }
    } catch (error) {
      console.error(error)
    } finally {
      dispatch('getApprovalDelegationList')
      commit('setIsLoading', false)
    }
  },
  async getApprovalDelegationList({ state: { userData }, commit }) {
    try {
      const { userId } = userData
      commit('setIsLoading', true)
      const {
        data: { data },
      } = await this.$axios.get(`/approvalDelegation/SearchAll/${userId}`)
      commit('setApprovalDelegationList', data)
    } catch (error) {
      console.log(error)
    } finally {
      commit('setIsLoading', false)
    }
  },

  async setSubstituteApprover({ state, commit, dispatch }, { userId }) {
    try {
      commit('setIsLoading', true)
      const { status } = await this.$axios.put(`/substituteApprover/${userId}`)
      dispatch('getSubstituteApproverList')
      if (status === 200) {
        showToast(this.$i18n.t('successMessage'), 'is-success')
      } else {
        showToast('Não foi possível realizar a operação', 'is-danger')
      }
    } catch (error) {
      console.error(error)
    } finally {
      commit('setIsLoading', false)
    }
  },
  async getSubstituteApproverList({ state: { userData }, commit }) {
    try {
      const { userId } = userData
      commit('setIsLoading', true)
      const {
        data: { data },
      } = await this.$axios.get(`/substituteApprover/SearchAll/${userId}`)
      commit('setSubstituteApproverList', data)
    } catch (error) {
      console.log(error)
    } finally {
      commit('setIsLoading', false)
    }
  },
  async createSubstituteApprover({
    state: { substituteApprover, userData },
    commit,
    dispatch,
  }) {
    try {
      const { beginTermDate, endTermDate } = substituteApprover
      const { userId } = userData
      const body = {
        ...substituteApprover,
        userId,
        beginTermDate: beginTermDate
          ? this.$moment(beginTermDate).format('DD/MM/YYYY')
          : this.$moment().format('DD/MM/YYYY'),
        endTermDate: endTermDate
          ? this.$moment(endTermDate).format('DD/MM/YYYY')
          : '',
      }
      commit('setIsLoading', true)
      const {
        status,
        data: { message },
      } = await this.$axios.post(`/substituteApprover/`, body)
      if (status === 200) {
        showToast(this.$i18n.t('successMessage'), 'is-success')
      } else {
        showToast(message, 'is-danger')
      }
    } catch (error) {
      console.error(error)
    } finally {
      dispatch('getSubstituteApproverList')
      commit('setIsLoading', false)
    }
  },
  async updateMaintainTransactions({
    state: { maintainProfile },
    commit,
    getters,
  }) {
    try {
      commit('setIsLoading', true)
      const { status } = await this.$axios.put(
        `/authorization/${maintainProfile.profileId}`,
        getters.getActiveMaintainTransactions
      )
      if (status === 200) {
        showToast(this.$i18n.t('successMessage'), 'is-success')
      } else {
        showToast('Não foi possível realizar a operação', 'is-danger')
      }
    } catch (error) {
      console.error(error)
    } finally {
      commit('setIsLoading', false)
    }
  },
  async updateMaintainProfile({
    state: { maintainProfile },
    commit,
    dispatch,
  }) {
    try {
      commit('setIsLoading', true)
      const {
        data: { message },
        status } = await this.$axios.put(
          `/profile/${maintainProfile.profileId}`,
          {
            ...maintainProfile,
          }
        )
      console.log(message)
      if (status === 200) {
        showToast(this.$i18n.t('successMessage'), 'is-success')
        await dispatch('getAllProfiles')
      } else {
        showToast(message, 'is-danger')
      }
      return status
    } catch (error) {
      console.error(error)
    } finally {
      commit('setIsLoading', false)
    }
  },
  async getMaintainProfile({ state, commit }, { profileId }) {
    try {
      commit('setIsLoading', true)
      const {
        data: { data },
      } = await this.$axios.get(`/profile/${profileId}`)
      delete data.profileAccess
      commit('setMaintainProfile', data)
    } catch (error) {
      console.log(error)
    } finally {
      commit('setIsLoading', false)
    }
  },
  async createProfile({ state: { maintainProfile }, commit, dispatch }) {
    try {
      commit('setIsLoading', true)
      const { status } = await this.$axios.post(`/profile/`, maintainProfile)

      if (status === 200) {
        showToast(this.$i18n.t('successMessage'), 'is-success')
        await dispatch('getAllProfiles')
      } else {
        showToast('Não foi possível realizar a operação', 'is-danger')
      }
    } catch (error) {
      console.error(error)
    } finally {
      commit('setIsLoading', false)
    }
  },
  async getAllParentProfiles({ state, commit }) {
    try {
      commit('setIsLoading', true)
      const {
        data: { data },
      } = await this.$axios.get(`/profile/SearchParent/0`)
      commit('setParentProfiles', data)
    } catch (error) {
      console.error(error)
    } finally {
      commit('setIsLoading', false)
    }
  },
  async getMaintainTransactions({ state: { maintainProfile }, commit }) {
    try {
      commit('setIsLoading', true)
      const {
        data: { data },
      } = await this.$axios.get(`/authorization/${maintainProfile.profileId}`)
      commit('setMaintainTransactions', data)
    } catch (error) {
      console.error(error)
    } finally {
      commit('setIsLoading', false)
    }
  },
  async getAllProfiles({ state, commit }) {
    try {
      commit('setIsLoading', true)
      const {
        data: { data },
      } = await this.$axios.get(`/profile/SearchAll/`)
      commit('setMaintainAllProfiles', data)
    } catch (error) {
      console.error(error)
    } finally {
      commit('setIsLoading', false)
    }
  },
  async handleUpdateProfileDataTerm(
    { state: { selectedProfileData }, commit },
    term
  ) {
    try {
      const body = { ...selectedProfileData, ...term }
      const { profileId } = selectedProfileData
      delete body.profileAccess
      commit('setIsLoading', true)
      const { status } = await this.$axios.put(`/profile/${profileId}`, body)

      if (status === 200) {
        showToast(this.$i18n.t('successMessage'), 'is-success')
      } else {
        showToast('Não foi possível realizar a operação', 'is-danger')
      }
      return status
    } catch (error) {
      console.error(error)
    } finally {
      commit('setIsLoading', false)
    }
  },
  async getAllPointOfSales({ state, commit }) {
    try {
      commit('setIsLoading', true)
      const {
        data: { data },
      } = await this.$axios.get(`/pointOfSale/SearchAll`)

      commit('setAllPointOfSales', data)
    } catch (error) {
      console.error(error)
    } finally {
      commit('setIsLoading', false)
    }
  },
  async setActivateUser({ state, commit }, { active, userId }) {
    try {
      commit('setIsLoading', true)
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
      return status
    } catch (error) {
      console.error(error)
    } finally {
      commit('setIsLoading', false)
    }
  },
  async getActivateUsers({
    state: {
      userData: { userId },
    },
    commit,
  }) {
    try {
      commit('setIsLoading', true)
      const {
        data: { data },
      } = await this.$axios.get(`/activateUser/${userId}/false`)
      commit('setActivateUsers', data)
    } catch (error) {
      console.error(error)
    } finally {
      commit('setIsLoading', false)
    }
  },
  async getSelectedProfileData({ state: { selectedProfileId }, commit }) {
    try {
      commit('setIsLoading', true)
      const {
        data: { data },
      } = await this.$axios.get(`/profile/${selectedProfileId}`)
      commit('setSelectedProfileData', data)
    } catch (error) {
      console.log(error)
    } finally {
      commit('setIsLoading', false)
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
      commit('setIsLoading', true)
      const {
        status,
        data: { message },
      } = await this.$axios.delete(
        `/userPointOfSale/${userId}/${pointOfSaleId}`
      )
      if (status === 200) {
        commit('deletePointOfSaleOnCollaborator', pointOfSaleId)
        showToast(this.$i18n.t('successMessage'), 'is-success')
      } else {
        showToast(message, 'is-danger')
      }
    } catch (error) {
      console.error(error)
    } finally {
      commit('setIsLoading', false)
    }
  },
  async setPointOfSale2Collaborator(
    {
      state: {
        selectedCollaborator: { userId },
      },
      commit,
    },
    { pointOfSaleId }
  ) {
    try {
      commit('setIsLoading', true)
      const {
        status,
        data: { message },
      } = await this.$axios.post(`/userPointOfSale/`, {
        pointOfSaleId,
        userId,
      })
      if (status === 200) {
        showToast(this.$i18n.t('successMessage'), 'is-success')
      } else {
        showToast(message, 'is-danger')
      }
    } catch (error) {
      console.error(error)
    } finally {
      commit('setIsLoading', false)
    }
  },
  async getAvailablePointOfSales({
    state: {
      userData: { userId },
    },
    commit,
  }) {
    try {
      commit('setIsLoading', true)
      const {
        data: { data },
      } = await this.$axios.get(`/userPointOfSale/SearchAll/${userId}/`)
      commit('setAvailablePointOfSales', data)
    } catch (error) {
      console.error(error)
    } finally {
      commit('setIsLoading', false)
    }
  },
  async setProfile2Collaborator(
    {
      state: {
        selectedCollaborator: { userId },
      },
      commit,
    },
    { profileId }
  ) {
    try {
      commit('setIsLoading', true)
      const {
        status,
        data: { message },
      } = await this.$axios.post(`/userProfile/`, {
        userId,
        profileId,
      })
      commit('setIsLoading', true)
      if (status === 200) {
        showToast(this.$i18n.t('successMessage'), 'is-success')
      } else {
        showToast(message, 'is-danger')
      }
    } catch (error) {
      console.error(error)
    }
  },
  async getAvailableProfiles({ state, commit }) {
    try {
      commit('setIsLoading', true)

      const {
        data: { data },
      } = await this.$axios.get(`/profile/SearchAll/`)

      commit('setAvailableProfiles', data)
    } catch (error) {
      console.error(error)
    } finally {
      commit('setIsLoading', false)
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
      commit('setIsLoading', true)
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
      return status
    } catch (error) {
      console.error(error)
    } finally {
      commit('setIsLoading', false)
    }
  },
  async getAvailableCollaborators({
    state: { searchCollaboratorName },
    commit,
  }) {
    try {
      commit('setIsLoading', true)
      const {
        data: { data },
        status,
      } = await this.$axios.get(`/assignProfile/${searchCollaboratorName}`)
      if (status === 200) {
        commit('setCollaborators', data)
        // const phone = data[0].phone.replace(/[^\d]/g, '')
        // commit('setSelectedCollaborator', { ...data[0], phone })
      }
    } catch (error) {
      console.error(error)
    } finally {
      commit('setIsLoading', false)
    }
  },
  async getRequests({
    state: {
      userData: { userId },
    },
    commit,
  }) {
    try {
      commit('setIsLoading', true)
      const {
        data: { data },
      } = await this.$axios.get(`/dashManager/${userId}`)
      commit('setRequests', data)
    } catch (error) {
      console.error(error)
    } finally {
      commit('setIsLoading', false)
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
      commit('setIsLoading', true)
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
    } finally {
      commit('setIsLoading', false)
    }
  },
  async saveTransaction({
    state: {
      selectedTransaction,
      selectedSystem: { systemId },
      selectedModule: { moduleId },
    },
    commit,
  }) {
    try {
      commit('setIsLoading', true)
      const {
        data: { message },
        status,
      } = await this.$axios.post(`/transaction/`, {
        ...selectedTransaction,
        systemId,
        moduleId,
      })

      if (status === 200) {
        showToast(this.$i18n.t('successMessage'), 'is-success')
      } else {
        showToast(message, 'is-danger')
      }
      return status
    } catch (error) {
      console.error(error)
    } finally {
      commit('setIsLoading', false)
    }
  },
  async editTransaction({
    state: {
      selectedSystem: { systemId },
      selectedModule: { moduleId },
      selectedTransaction,
    },
    commit,
  }) {
    try {
      const { transactionId } = selectedTransaction
      commit('setIsLoading', true)
      const {
        data: { message },
        status,
      } = await this.$axios.put(
        `/transaction/${systemId}/${moduleId}/${transactionId}/`,
        selectedTransaction
      )

      if (status === 200) {
        showToast(this.$i18n.t('successMessage'), 'is-success')
      } else {
        showToast(message, 'is-danger')
      }
      return status
    } catch (error) {
      console.error(error)
    } finally {
      commit('setIsLoading', false)
    }
  },
  async saveModule({
    state: {
      selectedModule,
      selectedSystem: { systemId },
    },
    commit,
  }) {
    try {
      commit('setIsLoading', true)
      const {
        data: { message },
        status,
      } = await this.$axios.post(`/module/`, {
        ...selectedModule,
        systemId,
      })

      if (status === 200) {
        showToast(this.$i18n.t('successMessage'), 'is-success')
      } else {
        showToast(message, 'is-danger')
      }
      return status
    } catch (error) {
      console.error(error)
    } finally {
      commit('setIsLoading', false)
    }
  },
  async editModule({
    state: {
      selectedModule,
      selectedSystem: { systemId },
    },
    commit,
  }) {
    try {
      const { moduleId } = selectedModule
      commit('setIsLoading', true)
      const {
        data: { message },
        status,
      } = await this.$axios.put(
        `/module/${systemId}/${moduleId}/`,
        selectedModule
      )

      if (status === 200) {
        showToast(this.$i18n.t('successMessage'), 'is-success')
      } else {
        showToast(message, 'is-danger')
      }
      return status
    } catch (error) {
      console.error(error)
    } finally {
      commit('setIsLoading', false)
    }
  },
  async getModules({
    state: {
      selectedSystem: { systemId },
    },
    commit,
  }) {
    try {
      commit('setIsLoading', true)
      const {
        data: { data },
      } = await this.$axios.get(`/module/SearchAll/${systemId}/`)
      commit('setSelectedSystemTerm', { key: 'modules', value: data })
    } catch (error) {
      console.error(error)
    } finally {
      commit('setIsLoading', false)
    }
  },
  async saveSystem({ state: { selectedSystem }, commit }) {
    try {
      commit('setIsLoading', true)
      const {
        data: { message },
        status,
      } = await this.$axios.post(`/system/`, selectedSystem)

      if (status === 200) {
        showToast(this.$i18n.t('successMessage'), 'is-success')
      } else {
        showToast(message, 'is-danger')
      }
      return status
    } catch (error) {
      console.error(error)
    } finally {
      commit('setIsLoading', false)
    }
  },
  async editSystem({ state: { selectedSystem }, commit }) {
    try {
      const { systemId } = selectedSystem
      commit('setIsLoading', true)
      const {
        data: { message },
        status,
      } = await this.$axios.put(`/system/${systemId}`, selectedSystem)

      if (status === 200) {
        showToast(this.$i18n.t('successMessage'), 'is-success')
      } else {
        showToast(message, 'is-danger')
      }
      return status
    } catch (error) {
      console.error(error)
    } finally {
      commit('setIsLoading', false)
    }
  },
  async getSystems({ commit }) {
    try {
      commit('setIsLoading', true)
      const {
        data: { data },
      } = await this.$axios.get(`/system/SearchAll/`)
      commit('setSystems', data)
    } catch (error) {
      console.error(error)
    } finally {
      commit('setIsLoading', false)
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
        data: { data, message },
        status,
      } = await this.$axios.post(`/access/${userId}`)

      // commit('setUserStatus', data.status)
      commit('setUserData', data)
      if (status === 200) {
        showToast(this.$i18n.t('successMessage'), 'is-success')
      } else {
        showToast(message, 'is-danger')
      }
    } catch (error) {
      console.error(error)
    }
  },
  async handleUpdateAccess({ state: { userData }, commit }) {
    try {
      const { userId } = userData
      const {
        data: { data, message },
        status,
      } = await this.$axios.put(`/access/${userId}`, {
        ...userData,
      })
      // commit('setUserStatus', data.status)
      commit('updateUserData', data)
      if (status === 200) {
        showToast(this.$i18n.t('successMessage'), 'is-success')
      } else {
        showToast(message, 'is-danger')
      }
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
      commit('setIsLoading', true)
      const {
        data: { data },
      } = await this.$axios.get(`/access/${userId}`)
      // commit('setUserStatus', data.status)
      commit('setUserData', data)
    } catch (error) {
      console.error(error)
    } finally {
      commit('setIsLoading', false)
    }
  },
  async handleUpdateMyProfile({ state: { userData }, commit }) {
    try {
      const { userId } = userData
      commit('setIsLoading', true)
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
    } finally {
      commit('setIsLoading', false)
    }
  },
  async handleUpdateProfile({ state: { selectedCollaborator }, commit }) {
    try {
      const { userId } = selectedCollaborator
      const body = { ...selectedCollaborator }
      delete body.pointOfSales
      delete body.profiles
      commit('setIsLoading', true)
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
    } finally {
      commit('setIsLoading', false)
    }
  },
  async handleGetMyProfile({
    state: {
      userData: { userId },
    },
    commit,
  }) {
    try {
      commit('setIsLoading', true)
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
    } finally {
      commit('setIsLoading', false)
    }
  },
}
