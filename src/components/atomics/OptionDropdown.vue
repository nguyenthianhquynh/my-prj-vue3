<script setup>
const props = defineProps({
    isShow: Boolean
})
</script>

<template>
    <div class="dropdown-container absolute top-9" :style="{display: !isShow ? 'none':'block'}">
        <div class="triangle">
        </div>
        <div
            class="options-container  top-full z-10 w-screen max-w-md overflow-hidden rounded bg-white shadow-lg ring-1 ring-transparent">
            <slot></slot>
        </div>
    </div>
</template>

<style lang="scss">
.dropdown-container{
//   z-index: 99;
//   position: relative;
//   width: 100%;
//   top: 105%;

    .triangle{
        position: relative;
        left: 8px;
        width: 0;
        height: 0;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-bottom: 5px solid white;
    }


}
</style>