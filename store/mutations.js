export default {
  setUserDataTerm(state, { key, value }) {
    state.userData[key] = value
  },
  setSelectedProfileTerm(state, { key, value }) {
    state.selectedProfile[key] = value
  },
  setSelectedProfile(state, selectedProfile) {
    state.selectedProfile = selectedProfile
  },
  setUserProfiles(state, profiles) {
    state.userProfiles = profiles
  },
  setSearchProfileId(state, userId) {
    state.searchProfileId = userId
  },
  setRequests(state, requests) {
    state.requests = requests
  },
  setSelectedModuleTransactions(state, transactions) {
    state.selectedModule.transactions = transactions
  },
  setSelectedTransactionActive(state, active) {
    state.selectedTransaction.active = active
  },
  setSelectedTransactionNotes(state, notes) {
    state.selectedTransaction.notes = notes
  },
  setSelectedTransactionTransactionName(state, transactionName) {
    state.selectedTransaction.transactionName = transactionName
  },
  setSelectedTransactionTransactionId(state, transactionId) {
    state.selectedTransaction.transactionId = transactionId
  },
  setTransactionModalMode(state, mode) {
    state.transactionModalMode = mode
  },
  setSelectedTransaction(state, selectedTransaction) {
    state.selectedTransaction = selectedTransaction
  },
  setSelectedModuleActive(state, active) {
    state.selectedModule.active = active
  },
  setSelectedModuleNotes(state, notes) {
    state.selectedModule.notes = notes
  },
  setSelectedModuleModuleName(state, moduleName) {
    state.selectedModule.moduleName = moduleName
  },
  setSelectedModuleModuleAcronym(state, moduleAcronym) {
    state.selectedModule.moduleAcronym = moduleAcronym
  },
  setSelectedModuleModuleId(state, moduleId) {
    state.selectedModule.moduleId = moduleId
  },
  setModuleModalMode(state, mode) {
    state.moduleModalMode = mode
  },
  setSelectedModule(state, selectedModule) {
    state.selectedModule = selectedModule
  },
  setSelectedSystemModules(state, modules) {
    state.selectedSystem.modules = modules
  },
  setSelectedSystemActive(state, active) {
    state.selectedSystem.active = active
  },
  setSelectedSystemNotes(state, notes) {
    state.selectedSystem.notes = notes
  },
  setSelectedSystemSystemName(state, systemName) {
    state.selectedSystem.systemName = systemName
  },
  setSelectedSystemSystemAcronym(state, systemAcronym) {
    state.selectedSystem.systemAcronym = systemAcronym
  },
  setSelectedSystemSystemId(state, systemId) {
    state.selectedSystem.systemId = systemId
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
