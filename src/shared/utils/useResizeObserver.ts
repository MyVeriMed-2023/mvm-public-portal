// src/utils/useResizeObserver.js

import { ref, onMounted, onBeforeUnmount } from 'vue';
import throttle from 'lodash/throttle';

export function useResizeObserver(callback:any, delay = 100) {
  const elementRef = ref(null);
  let observer:any = null;

  const throttledCallback = throttle(callback, delay);

  onMounted(() => {
    observer = new ResizeObserver((entries) => {
      throttledCallback(entries);
    });

    if (elementRef.value) {
      observer.observe(elementRef.value);
    }
  });

  onBeforeUnmount(() => {
    if (observer && elementRef.value) {
      observer.unobserve(elementRef.value);
    }
  });

  return elementRef;
}
