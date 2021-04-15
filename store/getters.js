export default {
  collaboratorsId(state) {
    return state.collaborators.map((user) => user.userId)
  },
  availablesProfilesName(state) {
    return state.availableProfiles.map((profile) => profile.profileName)
  },
}
