export const state = () => ({
  isAuthed: false,
  userData: {},
})

export const mutations = {
  changeAuth(state, payload) {
    state.isAuthed = payload
  },
  changeUserData(state, payload) {
    state.userData = payload
    console.log(state.userData)
  },
}
