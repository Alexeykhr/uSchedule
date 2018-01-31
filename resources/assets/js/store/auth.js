const state = {
  user: {},
  object: {} // TODO: transfer
}

const mutations = {
  SET_USER (state, obj) {
    state.user = obj
  },
  CLEAR_USER (state) {
    state.user = {}
  },
  SET_OBJECT (state, obj) {
    state.object = obj
  },
  CLEAR_OBJECT (state) {
    state.object = {}
  }
}

const actions = {
  authSetUser: ({commit}, obj) => {
    commit('SET_USER', obj)
  },
  authSetObject: ({commit}, obj) => {
    commit('SET_OBJECT', obj)
  },
  authClearUser: ({commit}) => {
    commit('CLEAR_USER')
    commit('CLEAR_OBJECT')
  }
}

export default {
  state, mutations, actions
}
