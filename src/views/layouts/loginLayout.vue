<template>
    <div class="min-h-[640px] bg-white">
        <Header />
        <div>
            <router-view />
            <Footer />
        </div>
    </div>
</template>

<script setup>
import Header from './sections/TheHeader.vue'
import Footer from './sections/TheFooter.vue'
</script>

<style lang="scss" scoped></style>