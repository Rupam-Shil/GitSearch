export const state = () => ({
  isAuthed: false,
  userData: {},
  userName: '',
})

export const mutations = {
  changeAuth(state, payload) {
    state.isAuthed = payload
  },
  changeUserData(state, payload) {
    state.userData = payload
    state.userName = payload.login
  },
}
