import { createApp } from 'vue';
import App from './App.vue';
import { create, NButton, NInput } from 'naive-ui';
import router from './router/index';
import store from './store/index';
import './assets/tailwind.css';

const naive = create({
  components: [NButton, NInput]
});

const app = createApp(App);

app.use(naive);
app.use(router);
app.use(store);

app.mount('#app');
