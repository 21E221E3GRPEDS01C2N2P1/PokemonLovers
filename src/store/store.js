import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  state() {
    return{
      user: {
        loggedIn: false,
        data: null,
      },
      tokens: 0,
      team: "",
    }
  },
  getters: {
    user(state){
      return state.user
    },
    total_tokens: state => state.tokens,
  },
  mutations: {
    SET_LOGGED_IN(state, value) {
      state.user.loggedIn = value;
    },
    SET_USER(state, data) {
      state.user.data = data;
    },
    addTokens(state, tokens) {
      state.tokens += tokens
    },
    userTeam(state, team) {
      state.team = team
    }
  },
  actions: {
    fetchUser({ commit }, user) {
      commit("SET_LOGGED_IN", user !== null);
      if (user) {
        commit("SET_USER", {
          displayName: user.displayName,
          email: user.email
        });
      } else {
        commit("SET_USER", null);
      }
    },
    addTokens: (context) => {
      context.commit("addTokens");
    },
    userTeam: (context) => {
      context.commit("userTeam");
    },
  },
  plugins: [createPersistedState()]
});