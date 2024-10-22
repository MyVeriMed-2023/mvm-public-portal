// store/index.ts
/* eslint-disable */
import { createStore } from 'vuex';
import { AuthUserModel } from '@/model/user/AuthUserModel';

interface State {
  token: string | null;
  user: AuthUserModel | null;
  loading: boolean; // Add loading state
}

const store = createStore<State>({
  state: {
    token: localStorage.getItem('token') || null,
    user: JSON.parse(localStorage.getItem('user') || 'null') as AuthUserModel | null,
    loading: false, // Initial loading state is false
  },
  mutations: {
    setAuth(state, { token, user }: { token: string; user: any }) {
      state.token = token;
      state.user = new AuthUserModel(user);
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
    },
    clearAuth(state) {
      state.token = null;
      state.user = null;
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    },

    setLoading(state, isLoading: boolean) { // Mutation to set loading state
      state.loading = isLoading;
    },

    updateUser(state, user: any) {
      state.user = new AuthUserModel(user);
      localStorage.setItem('user', JSON.stringify(user)); // Update the user in localStorage
    },

  },
  actions: {
    logout({ commit }) {
      commit('clearAuth');
    },

    startLoading({ commit }) {
      commit('setLoading', true);
    },
    stopLoading({ commit }) {
      commit('setLoading', false);
    },

  },
  getters: {
    isAuthenticated: (state) => !!state.token,
    getUser: (state) => state.user,
    isLoading: (state) => state.loading, // Getter for loading state
  },
});

export default store;
