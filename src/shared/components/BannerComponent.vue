<template>

            <div class="text-center">

                <!-- Logo Carousel animation -->
                <div x-data="{}" x-init="$nextTick(() => {
                        let ul = $refs.logos;
                        ul.insertAdjacentHTML('afterend', ul.outerHTML);
                        ul.nextSibling.setAttribute('aria-hidden', 'true');
                    })"
                    class="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
                    <ul x-ref="logos"
                        class="flex items-center w-full justify-center  [&_li]:mx-2 animate-infinite-scroll">
                        <li class="w-full">
                            <n-alert title="Warning Alert" type="warning" closable>
                                Unusual Scanninng Identified
                            </n-alert>

                        </li>
                        <li class="w-full">
                            <n-alert title="Danger Alert" type="error" closable>
                                Found some Fack product in your country.
                            </n-alert>
                        </li>

                    </ul>
                </div>
                <!-- End: Logo Carousel animation -->

            </div>



    <!-- <div x-data="{}" x-init="$nextTick(() => {
                        let ul = $refs.logos;
                        ul.insertAdjacentHTML('afterend', ul.outerHTML);
                        ul.nextSibling.setAttribute('aria-hidden', 'true');
                    })"
        class="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        <ul x-ref="logos"
            class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
            <li>
                <n-alert title="Warning Text" type="warning" closable>
                    Honey disconnect the phone
                </n-alert>

            </li>
            <li>
                <n-alert title="Error Text" type="error" closable>
                    I'm back in the U.S.S.R.
                </n-alert>
            </li>

        </ul>
    </div> -->

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
</style>