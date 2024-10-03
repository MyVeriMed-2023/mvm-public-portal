// src/utils/debounceResizeObserver.js

import debounce from 'lodash/debounce';

export function createDebouncedResizeObserver(callback:any, delay = 100) {
  const debouncedCallback = debounce(callback, delay);

  return new ResizeObserver((entries) => {
    debouncedCallback(entries);
  });
}
