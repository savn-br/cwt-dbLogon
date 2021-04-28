export default {
  collaboratorsId(state) {
    return state.collaborators.map((user) => user.userId) || []
  },
  availableProfilesName(state) {
    return state.availableProfiles.map((profile) => profile.profileName)
  },

  isPointOfSaleActive2Collaborator: (state) => (pointOfSaleId) => {
    return state.selectedCollaborator.pointOfSales.some((pointOfSale) => {
      return pointOfSale.pointOfSaleId === pointOfSaleId
    })
  },
}
