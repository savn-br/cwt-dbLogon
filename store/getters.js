export default {
  userProfilesId(state) {
    return state.userProfiles.map((user) => user.userId)
  },
}
