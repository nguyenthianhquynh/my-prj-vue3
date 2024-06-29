
<script setup>
// import { defineProps } from 'vue'
//props: size, display inline
const props = defineProps({
    size: {
        type: String,
        default: '50'
    },
    display: {
        type: String,
        default: 'flex'
    }
})
</script>

<template>
    <a href="/" aria-label="" :style="{ display: display, textAlign: '-webkit-center' }" class="logo">
        <img src="/src/assets/logo.svg" alt="tailus logo" :style="{ height: size+ 'px'}" />
        <div class="company-nm content-end px-2 font-bold"> your company </div>
    </a>
</template>

<style lang="scss" scoped>
.logo{
    display: flex;
    font-family: sans-serif;
    text-transform: uppercase;

    .company-nm {
        background-image: linear-gradient(43deg, $primary-blue 40%, green 50%, $primary-green 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        transition: all .2s;
        font-size: 1.5rem;
    }
}

</style>