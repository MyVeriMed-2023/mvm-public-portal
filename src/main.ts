import { createApp } from 'vue';
import App from './App.vue';
import { create, NButton, NInput,NAlert,NSpace,NSelect, NBadge, NAvatar, NDialog} from 'naive-ui';
import router from './router/index';
import store from './store/index';
import naiveUI from 'naive-ui'
import './assets/tailwind.css';
import debounceResizeObserver from '@/shared/directives/debounceResizeObserver'
import i18n from '@/assets/i18n/i18n'; // Import the i18n setup

// const naive = create({
//   components: [NButton, NInput,NAlert,NSpace,NSelect, NBadge, NAvatar, NSpace, NDialog]
// });

const app = createApp(App);

app.directive('debounce-resize-observer', debounceResizeObserver);
app.use(i18n);
app.use(naiveUI);
app.use(router);
app.use(store);

app.mount('#app');
