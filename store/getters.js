export default {
  collaboratorsName(state) {
    return state.collaborators.map((user) => user.userName) || []
  },
  availableProfilesName(state) {
    return state.availableProfiles.map((profile) => profile.profileName)
  },

  isPointOfSaleActive2Collaborator: (state) => (pointOfSaleId) => {
    return state.selectedCollaborator.pointOfSales.some((pointOfSale) => {
      return pointOfSale.pointOfSaleId === pointOfSaleId
    })
  },
  getActiveMaintainTransactions(state) {
    const maintain = [...state.maintainTransactions]
    const transactions = maintain
      .map((system) =>
        system.modules
          .map((module) =>
            module.transactions.map((transaction) => ({
              transactionId: transaction.transactionId,
              selected: transaction.selected,
            }))
          )
          .flat()
      )
      .flat()
      .filter((transaction) => transaction.selected)
      .map((transaction) => transaction.transactionId)

    return transactions
  },
}
