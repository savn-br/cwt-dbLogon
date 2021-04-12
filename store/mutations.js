export default {
  changeUserProfiles(state, profiles) {
    state.userProfiles = profiles
  },
  changeSelectedProfileId(state, userId) {
    state.selectedProfileId = userId
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
  changeUserId(state, userId) {
    state.userData.userId = userId
  },
  changeUserProfileType(state, profileType) {
    state.userData.profileType = profileType
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
  changeManager(state, manager) {
    state.userData.manager = manager
  },
  changeCompany(state, company) {
    state.userData.company = company
  },
  changeUserName(state, userName) {
    state.userData.userName = userName
  },
  changeEmail(state, email) {
    state.userData.email = email
  },
  changePhone(state, phone) {
    state.userData.phone = phone
  },
  changeField(state, field) {
    state.userData.field = field
  },
  changeRole(state, role) {
    state.userData.role = role
  },
  changeEmployeeNumber(state, employeeNumber) {
    state.userData.employeeNumber = employeeNumber
  },
  changeEmergencyFlag(state, emergencyFlag) {
    state.userData.emergencyFlag = emergencyFlag
  },
  changeVipFlag(state, vipFlag) {
    state.userData.vipFlag = vipFlag
  },
  changePointOfSales(state, pointOfSales) {
    state.pointOfSales = pointOfSales
  },
  changeProfileAccess(state, profileAccess) {
    state.profileAccess = profileAccess
  },
}
