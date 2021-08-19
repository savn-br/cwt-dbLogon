import Vue from 'vue'
export default {
  setLogState(state, value) {
    state.logState = value
  },
  setSearchUsersByManager(state, value) {
    state.searchUsersByManager = value
  },
  setApprovalDelegationList(state, value) {
    state.approvalDelegationList = value
  },
  setApprovalDelegationTerm(state, { key, value }) {
    Vue.set(state.approvalDelegation, key, value)
  },
  clearApprovalDelegation(state, value) {
    state.approvalDelegation = {
      userSubstituteId: '',
      beginTermDate: '',
      endTermDate: '',
      active: true,
    }
  },
  setApprovalDelegation(state, value) {
    state.approvalDelegation = value
  },
  setSubstituteApproverList(state, value) {
    state.substituteApproverList = value
  },
  setSubstituteApproverTerm(state, { key, value }) {
    Vue.set(state.substituteApprover, key, value)
  },
  clearSubstituteApprover(state, value) {
    state.substituteApprover = {
      userSubstituteId: '',
      beginTermDate: '',
      endTermDate: '',
      active: true,
    }
  },
  setSubstituteApprover(state, value) {
    state.substituteApprover = value
  },
  setMaintainProfileMode(state, value) {
    state.maintainProfileMode = value
  },
  setMaintainProfileTerm(state, { term, value }) {
    Vue.set(state.maintainProfile, term, value)
  },
  clearMaintainProfile(state) {
    state.maintainProfile = {
      profileName: '',
      profileParentId: null,
      profileParentName: '',
      profileId: '',
      active: false,
      viewCCard: false,
      description: '',
    }
  },
  setMaintainProfile(state, value) {
    state.maintainProfile = value
  },

  setParentProfiles(state, value) {
    state.parentProfiles = value
  },
  setIsLoading(state, value) {
    state.isLoading = value
  },
  setLastMenuLabel(state, value) {
    state.lastMenuLabel = value
  },
  updateMaintainTransactionSystem(state, { systemId, status }) {
    const maintain = [...state.maintainTransactions]
    const systemIdx = maintain
      .map((system) => system.systemId.toString())
      .indexOf(systemId)
    const selectedSystem = maintain[systemIdx]

    Vue.set(state.maintainTransactions, systemIdx, {
      ...selectedSystem,
      selected: status,
    })

    selectedSystem.modules.forEach((module, moduleIdx) => {
      Vue.set(state.maintainTransactions[systemIdx].modules, moduleIdx, {
        ...module,
        selected: status,
      })

      module.transactions.forEach((transaction, transactionIdx) => {
        Vue.set(
          state.maintainTransactions[systemIdx].modules[moduleIdx].transactions,
          transactionIdx,
          { ...transaction, selected: status }
        )
      })
    })
  },
  updateMaintainTransactionModule(state, { moduleId, status }) {
    const [systemId] = moduleId.split('_')
    const maintain = [...state.maintainTransactions]

    const systemIdx = maintain
      .map((system) => system.systemId.toString())
      .indexOf(systemId)

    const selectedSystem = maintain[systemIdx]

    const moduleIdx = selectedSystem.modules
      .map((module) => module.moduleId)
      .indexOf(moduleId)

    const selectedModule = selectedSystem.modules[moduleIdx]

    // Atualizar estado do modulo
    Vue.set(state.maintainTransactions[systemIdx].modules, moduleIdx, {
      ...selectedModule,
      selected: status,
    })

    //  Atualizar estado de cada transaction pertencente ao modulo
    selectedModule.transactions.forEach((transaction, index) => {
      Vue.set(
        state.maintainTransactions[systemIdx].modules[moduleIdx].transactions,
        index,
        { ...transaction, selected: status }
      )
    })

    const moduleStatus = selectedSystem.modules.some(
      (module) => module.selected
    )

    // Atualizar estado do sistema ao qual o modulo pertence
    Vue.set(state.maintainTransactions, systemIdx, {
      ...selectedSystem,
      selected: moduleStatus,
    })
  },
  updateMaintainTransactionsTransaction(state, { transactionId, status }) {
    const [systemId, moduleAuxId] = transactionId.split('_')
    const moduleId = `${systemId}_${moduleAuxId}`

    const maintain = [...state.maintainTransactions]

    const systemIdx = maintain
      .map((system) => system.systemId.toString())
      .indexOf(systemId)

    const selectedSystem = maintain[systemIdx]

    const moduleIdx = selectedSystem.modules
      .map((module) => module.moduleId)
      .indexOf(moduleId)

    const selectedModule = selectedSystem.modules[moduleIdx]

    const transactionIdx = selectedModule.transactions
      .map((transaction) => transaction.transactionId)
      .indexOf(transactionId)

    const selectedTransaction = selectedModule.transactions[transactionIdx]

    Vue.set(
      state.maintainTransactions[systemIdx].modules[moduleIdx].transactions,
      transactionIdx,
      { ...selectedTransaction, selected: status }
    )

    const transactionStatus = selectedModule.transactions.some(
      (transaction) => transaction.selected
    )
    Vue.set(state.maintainTransactions[systemIdx].modules, moduleIdx, {
      ...selectedModule,
      selected: transactionStatus,
    })
    Vue.set(state.maintainTransactions, systemIdx, {
      ...selectedSystem,
      selected: transactionStatus,
    })
  },
  setMaintainTransactions(state, value) {
    state.maintainTransactions = value
  },
  setSelectedMaintainProfile(state, value) {
    state.selectedMaintainProfile = value
  },
  setMaintainAllProfiles(state, value) {
    state.maintainAllProfiles = value
  },
  updateProfileOnCollaborator(state, { profileId, value }) {
    const idx = state.selectedCollaborator.profiles
      .map((profile) => profile.profileId)
      .indexOf(profileId)
    Vue.set(state.selectedCollaborator.profiles, idx, value)
  },
  deletePointOfSaleOnCollaborator(state, value) {
    const idx = state.selectedCollaborator.pointOfSales
      .map((point) => point.pointOfSaleId)
      .indexOf(value)
    Vue.delete(state.selectedCollaborator.pointOfSales, idx)
  },
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
  setAvailableProfiles(state, profiles) {
    state.availableProfiles = profiles
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
  setSearchCollaboratorName(state, userId) {
    state.searchCollaboratorName = userId
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
    state.selectedTransaction = { ...selectedTransaction }
  },
  setSelectedModuleTerm(state, { key, value }) {
    state.selectedModule[key] = value
  },

  setModuleModalMode(state, mode) {
    state.moduleModalMode = mode
  },
  setSelectedModule(state, selectedModule) {
    state.selectedModule = { ...selectedModule }
  },
  setSelectedSystemTerm(state, { key, value }) {
    state.selectedSystem[key] = value
  },

  setSystemModalMode(state, mode) {
    state.systemModalMode = mode
  },
  setSelectedSystem(state, selectedSystem) {
    state.selectedSystem = { ...selectedSystem }
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
  updateUserData(state, value) {
    state.userData = { ...state.userData, ...value }
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
    delete userData.managerId
    delete userData.managerName
    state.userData = { ...state.userData, ...userData }
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
