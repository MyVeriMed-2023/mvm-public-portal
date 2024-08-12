import { createStore } from 'vuex';

interface State {
  token: string;
}

export default createStore<State>({
  state: {
    token: localStorage.getItem('token') || '',
  },
  mutations: {
    setToken(state, token: string) {
      state.token = token;
      localStorage.setItem('token', token);
    },
    clearToken(state) {
      state.token = '';
      localStorage.removeItem('token');
    },
  },
  getters: {
    isAuthenticated: (state) => !!state.token,
  },
});
