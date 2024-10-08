<template>
    <div class="text-center">
      <div x-data="{}"
           x-init="$nextTick(() => {
              let ul = $refs.logos;
              ul.insertAdjacentHTML('afterend', ul.outerHTML);
              ul.nextSibling.setAttribute('aria-hidden', 'true');
           })"
           class="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        <ul x-ref="logos"
            class="flex items-center w-full justify-center animate-scroll"> <!-- Added class 'animate-scroll' -->
          <li class="w-full flex-shrink-0 border-2 border-red-400">
            <n-alert title="Warning Alert" type="warning" closable>
              Unusual Scanning Identified
            </n-alert>
          </li>
          <li class="w-full flex-shrink-0 border-2 border-red-400">
            <n-alert title="Danger Alert" type="error" closable>
              Found some fake product in your country.
            </n-alert>
          </li>
        </ul>
      </div>
    </div>
  </template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
    components: {

    }
});
</script>

<style scoped>
.n-alert:not(:last-child) {
  margin-bottom: 12px;
}

/* Keyframe for continuous scroll animation */
@keyframes scroll {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}

/* Applying the scroll animation to the ul */
.animate-scroll {
  display: flex;
  animation: scroll 10s linear infinite; /* Adjust time for slower/faster scrolling */
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

/* Ensuring each alert takes full width of the screen */
li {
margin:4px;
  min-width: 100vw; /* Each alert takes full width of the viewport */
}
</style>
