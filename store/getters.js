export default {
  collaboratorsId(state) {
    return state.collaborators.map((user) => user.userId)
  },
  availablesProfilesName(state) {
    return state.availableProfiles.map((profile) => profile.profileName)
  },
  availablePointOfSales(state) {
    return state.availablePointOfSales.map((point) => point.pointOfSale)
  },
  isProfileActive2Collaborator: (state) => (profileId) => {
    return state.selectedCollaborator.profiles.some((profile) => {
      return profile.profileId === profileId
    })
  },
}
