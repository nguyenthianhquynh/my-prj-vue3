<script setup>
import Header from './sections/TheHeader.vue'
import Footer from './sections/TheFooter.vue'
</script>

<template>
    <div class="flex flex-col">
        <div class="fixed top-0 w-full shadow-md z-10">
            <Header />
        </div>
        <div class="border border-solid border-1 border-light-blue-500 px-5">
            <router-view />
        </div>
        <div>
            <Footer />
        </div>
    </div>
</template>

<style lang="scss" scoped>

.after-login-layout {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;

    .row {
        display: flex;
        flex-direction: row;
        align-items: stretch;
    }

    .left-part {
        min-width: 270px;
        width: 270px;
        // background-color: $text-primary1;

        @include mq(l) {
            width: 0px;
            min-width: 0px;
        }

        &.logo {
            @include flex(left, center);
            padding-left: 30px;

            >a {
                height: 30px;
            }
        }

        &.kanbei {
            background-color: $oem1color;
        }

        @include mq(l) {
            &.logo {
                display: none;
            }
        }
    }

    .right-part {
        flex: 1 1 auto;
        height: 60px;

        @include mq(l) {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 999;
        }
    }

    .sidebar {
        position: unset;
        width: 100%;
        height: 100%;

        &.kanbei {
            background-color: $oem1color;
        }

        @include mq(l) {
            pointer-events: visible;
            position: fixed;
            z-index: 998;
            height: unset;
            top: 60px;
            bottom: 0;
            left: -100%;
            transition: all 0.15s ease-out;

            &.show {
                left: 0;
                right: 0;
            }
        }
    }

    .page-content {
        flex: 1 1 auto;
        height: 100%;
        overflow: hidden;
    }

    .header {
        height: 60px;
        min-height: 60px;
    }

    .body {
        flex: 1 1 0;
        position: relative;
        overflow: hidden;
        // background-color: $text-primary1;

        .page-content {
            background-color: white;
        }

        @include mq(l) {
            overflow: visible;

            &:not(.show) {
                overflow: visible;
            }
        }
    }
}
</style>