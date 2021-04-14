export default {
  collaboratorsId(state) {
    return state.collaborators.map((user) => user.userId)
  },
}
