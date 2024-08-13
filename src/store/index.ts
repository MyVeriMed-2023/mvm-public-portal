// store/index.ts
import { createStore } from 'vuex';
import { AuthUserModel } from '@/model/user/AuthUserModel';

interface State {
  token: string | null;
  user: AuthUserModel | null;
}

const store = createStore<State>({
  state: {
    token: localStorage.getItem('token') || null,
    user: JSON.parse(localStorage.getItem('user') || 'null') as AuthUserModel | null,
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
  },
  actions: {
    logout({ commit }) {
      commit('clearAuth');
    },
  },
  getters: {
    isAuthenticated: (state) => !!state.token,
    getUser: (state) => state.user,
  },
});

export default store;
