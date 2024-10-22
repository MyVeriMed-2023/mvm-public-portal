// src/directives/debounceResizeObserver.js
/* eslint-disable */
import debounce from 'lodash/debounce';

export default {
  mounted(el: any, binding: any) {
    const callback = binding.value;
    const delay = binding.arg || 100; // Default debounce delay

    const debouncedCallback = debounce((entries) => {
      callback(entries);
    }, delay);

    const observer = new ResizeObserver(debouncedCallback);
    observer.observe(el);

    el._resizeObserver = observer;
  },
  unmounted(el: any) {
    if (el._resizeObserver) {
      el._resizeObserver.disconnect();
    }
  }
};
