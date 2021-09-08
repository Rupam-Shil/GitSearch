export const state = () => ({
  isAuthed: false,
})

export const mutations = {
  changeAuth(state, payload) {
    state.isAuthed = payload
  },
}
export const actions = {}
