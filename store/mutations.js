export default {
  changeUserDataTerm(state, { key, value }) {
    state.userData[key] = value
  },
  changeSelectedProfileTerm(state, { key, value }) {
    state.selectedProfile[key] = value
  },
  changeSelectedProfile(state, selectedProfile) {
    state.selectedProfile = selectedProfile
  },
  changeUserProfiles(state, profiles) {
    state.userProfiles = profiles
  },
  changeSearchProfileId(state, userId) {
    state.searchProfileId = userId
  },
  changeRequests(state, requests) {
    state.requests = requests
  },
  changeSelectedModuleTransactions(state, transactions) {
    state.selectedModule.transactions = transactions
  },
  changeSelectedTransactionActive(state, active) {
    state.selectedTransaction.active = active
  },
  changeSelectedTransactionNotes(state, notes) {
    state.selectedTransaction.notes = notes
  },
  changeSelectedTransactionTransactionName(state, transactionName) {
    state.selectedTransaction.transactionName = transactionName
  },
  changeSelectedTransactionTransactionId(state, transactionId) {
    state.selectedTransaction.transactionId = transactionId
  },
  changeTransactionModalMode(state, mode) {
    state.transactionModalMode = mode
  },
  changeSelectedTransaction(state, selectedTransaction) {
    state.selectedTransaction = selectedTransaction
  },
  changeSelectedModuleActive(state, active) {
    state.selectedModule.active = active
  },
  changeSelectedModuleNotes(state, notes) {
    state.selectedModule.notes = notes
  },
  changeSelectedModuleModuleName(state, moduleName) {
    state.selectedModule.moduleName = moduleName
  },
  changeSelectedModuleModuleAcronym(state, moduleAcronym) {
    state.selectedModule.moduleAcronym = moduleAcronym
  },
  changeSelectedModuleModuleId(state, moduleId) {
    state.selectedModule.moduleId = moduleId
  },
  changeModuleModalMode(state, mode) {
    state.moduleModalMode = mode
  },
  changeSelectedModule(state, selectedModule) {
    state.selectedModule = selectedModule
  },
  changeSelectedSystemModules(state, modules) {
    state.selectedSystem.modules = modules
  },
  changeSelectedSystemActive(state, active) {
    state.selectedSystem.active = active
  },
  changeSelectedSystemNotes(state, notes) {
    state.selectedSystem.notes = notes
  },
  changeSelectedSystemSystemName(state, systemName) {
    state.selectedSystem.systemName = systemName
  },
  changeSelectedSystemSystemAcronym(state, systemAcronym) {
    state.selectedSystem.systemAcronym = systemAcronym
  },
  changeSelectedSystemSystemId(state, systemId) {
    state.selectedSystem.systemId = systemId
  },
  changeSystemModalMode(state, mode) {
    state.systemModalMode = mode
  },
  changeSelectedSystem(state, selectedSystem) {
    state.selectedSystem = selectedSystem
  },
  changeSystems(state, systems) {
    state.systems = systems
  },
  changeCurrentMenu(state, transactions) {
    state.currentMenu = [
      { partial: 'MyProfile', label: 'myProfile', icon: 'account' },
    ]
    transactions.forEach((transaction) => {
      state.currentMenu = [...state.currentMenu, state.menuStruct[transaction]]
    })
  },
  changeCurrentPartial(state, currentPartial) {
    state.currentPartial = currentPartial
  },

  changeUserData(state, userData) {
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
  changeUserStatus(state, userStatus) {
    state.userStatus = userStatus
  },

  changePointOfSales(state, pointOfSales) {
    state.pointOfSales = pointOfSales
  },
  changeProfileAccess(state, profileAccess) {
    state.profileAccess = profileAccess
  },
}
