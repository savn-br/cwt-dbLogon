export default {
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
