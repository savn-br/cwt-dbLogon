import Vue from 'vue'
export default {
  updateSelectedCollaborator(state, selectedCollaborator) {
    state.selectedCollaborator = {
      ...state.selectedCollaborator,
      ...selectedCollaborator,
    }
  },
  setAllPointOfSales(state, value) {
    state.allPointOfSales = value
  },
  setBackProfileSearchPartial(state, value) {
    state.backProfileSearchPartial = value
  },
  setActivateUsersElement(state, value) {
    const index = state.activateUsers
      .map((user) => user.userId)
      .indexOf(value.userId)
    Vue.set(state.activateUsers, index, value)
  },
  setActivateUsers(state, value) {
    state.activateUsers = value
  },
  setSelectedProfileData(state, value) {
    state.selectedProfileData = value
  },
  setSelectedProfileId(state, value) {
    state.selectedProfileId = value
  },
  setAvailablePointOfSales(state, value) {
    state.availablePointOfSales = value
  },
  setSearchProfileLoading(state, value) {
    state.searchProfileLoading = value
  },
  setAvailableProfiles(state, profiles) {
    state.availableProfiles = profiles
  },
  setSearchCollaboratorLoading(state, value) {
    state.searchCollaboratorLoading = value
  },
  setSearchProfileId(state, profileId) {
    state.searchProfileId = profileId
  },
  setUserDataTerm(state, { key, value }) {
    state.userData[key] = value
  },
  setSelectedCollaboratorTerm(state, { key, value }) {
    state.selectedCollaborator[key] = value
  },
  setSelectedCollaborator(state, selectedCollaborator) {
    state.selectedCollaborator = selectedCollaborator
  },
  setCollaborators(state, collaborators) {
    state.collaborators = collaborators
  },
  setSearchCollaboratorId(state, userId) {
    state.searchCollaboratorId = userId
  },
  setRequests(state, requests) {
    state.requests = requests
  },

  setSelectedTransactionTerm(state, { key, value }) {
    state.selectedTransaction[key] = value
  },
  setTransactionModalMode(state, mode) {
    state.transactionModalMode = mode
  },
  setSelectedTransaction(state, selectedTransaction) {
    state.selectedTransaction = selectedTransaction
  },
  setSelectedModuleTerm(state, { key, value }) {
    state.selectedModule[key] = value
  },

  setModuleModalMode(state, mode) {
    state.moduleModalMode = mode
  },
  setSelectedModule(state, selectedModule) {
    state.selectedModule = selectedModule
  },
  setSelectedSystemTerm(state, { key, value }) {
    state.selectedSystem[key] = value
  },

  setSystemModalMode(state, mode) {
    state.systemModalMode = mode
  },
  setSelectedSystem(state, selectedSystem) {
    state.selectedSystem = selectedSystem
  },
  setSystems(state, systems) {
    state.systems = systems
  },
  setCurrentMenu(state, transactions) {
    state.currentMenu = [
      { partial: 'MyProfile', label: 'myProfile', icon: 'account' },
    ]
    transactions.forEach((transaction) => {
      state.currentMenu = [...state.currentMenu, state.menuStruct[transaction]]
    })
  },
  setCurrentPartial(state, currentPartial) {
    state.currentPartial = currentPartial
  },

  setUserData(state, userData) {
    if (userData.status) {
      delete userData.status
    }
    if (userData.pointOfSales) {
      delete userData.pointOfSales
    }
    if (userData.profileAccess) {
      delete userData.profileAccess
    }
    state.userData = userData
  },
  setUserStatus(state, userStatus) {
    state.userStatus = userStatus
  },

  setPointOfSales(state, pointOfSales) {
    state.pointOfSales = pointOfSales
  },
  setProfileAccess(state, profileAccess) {
    state.profileAccess = profileAccess
  },
}
