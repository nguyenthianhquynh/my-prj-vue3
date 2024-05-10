<script setup>

const props = defineProps({
    isShowSideBar: {
        type: Boolean,
        required: false
    },
    type: {
        type: String,
        default: 'right'
    }
})

const emit = defineEmits(['toggleSideBar'])

</script>

<template>
    <div role="dialog" aria-modal="true" class="sm:max-w-sm w-full bg-white sidebar"
        :class="`${props.type} ${props.isShowSideBar ? 'open' : ''}`">
        <!-- Background backdrop, show/hide based on slide-over state. -->
        <!-- sm:max-w-sm -->
        <div :class="{ 'fixed': props.isShowSideBar }" class="inset-0 z-10"></div>
        <div class="absolute z-20 w-full overflow-y-auto  px-6 py-6  sm:ring-1 sm:ring-gray-900/10">
            <div class="flex items-center justify-between">
                <a href="#" class="-m-1.5 p-1.5">
                    <span class="sr-only">Your Company</span>
                    <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                        alt="">
                </a>
                <button @click="emit('toggleSideBar')" type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700">
                    <span class="sr-only">Close menu</span>
                    <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                        aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            <div class="mt-6 flow-root">
                <div class="-my-6 divide-y divide-gray-500/10">
                    <div class="space-y-2 py-6">
                        <div class="-mx-3">
                            <button type="button"
                                class="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7  hover:bg-gray-50"
                                aria-controls="disclosure-1" aria-expanded="false">
                                <span class="flex-auto">Home</span>
                                <svg class="h-5 w-5 flex-none" viewBox="0 0 20 20" fill="currentColor"
                                    aria-hidden="true">
                                    <path fill-rule="evenodd"
                                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                        clip-rule="evenodd" />
                                </svg>
                            </button>
                            <!-- 'Product' sub-menu, show/hide based on menu state. -->
                            <div class="mt-2 space-y-2" id="disclosure-1">
                                <a href="#"
                                    class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7  hover:bg-gray-50">Analytics</a>
                                <a href="#"
                                    class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7  hover:bg-gray-50">Engagement</a>
                                <a href="#"
                                    class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7  hover:bg-gray-50">Security</a>
                                <a href="#"
                                    class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7  hover:bg-gray-50">Integrations</a>
                                <a href="#"
                                    class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7  hover:bg-gray-50">Automations</a>
                                <a href="#"
                                    class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7  hover:bg-gray-50">Watch
                                    demo</a>
                                <a href="#"
                                    class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7  hover:bg-gray-50">Contact
                                    sales</a>
                            </div>
                        </div>
                        <a href="#"
                            class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7  hover:bg-gray-50">Features</a>
                        <a href="#"
                            class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7  hover:bg-gray-50">Marketplace</a>

                        <a href="#"
                            class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7  hover:bg-gray-50">Company</a>
                    </div>
                    <div class="py-6">
                        <a href="#"
                            class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7  hover:bg-gray-50">Log
                            in</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.sidebar {
    position: fixed;
    top: 0;
    height: 100vh;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);

    &.left {
        left: -24rem;
        /* Sidebar is initially hidden */
        transition: left 0.3s ease-in-out;

        /* Transition the left property */
        &.open {
            left: 0;
        }
    }

    &.right {
        transition: right 0.3s ease-in-out !important;
        right: -100%;
        /* Transition the left property */
        &.open {
            right: 0;
        }
    }
}
</style>