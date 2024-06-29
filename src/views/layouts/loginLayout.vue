<template>
    <div class="wrapper divide-x divide-slate-200">
        <div class="left" :class="{'mobile-mode': isMobile}">
            <img class="dental-icon" :src="DentalIcon" alt="">
        </div>
        <div class="right">
            <router-view />
        </div>
    </div>
</template>

<script setup>
import DentalIcon from '@/assets/images/dental-care.jpg'
import { inject } from 'vue'

const isMobile = inject('isMobile')
</script>

<style lang="scss" scoped>
.wrapper{
    height: 100vh;
    width: 100vw;
    @include flex(space-around,center, row);
    .left{
        flex: 1;
        @include flex(center,center, row);
    }
    .right{
        height: 100%;
        flex: 1;
        @include flex(center,center, row);
    }
    .mobile-mode{
        display: none;
    }
}
</style>