<template>
    <div>
        <Header />
        <div>
            <router-view />
            <Footer />
        </div>
    </div>
</template>

<script>
import Header from './sections/TheHeader.vue'
import Footer from './sections/TheFooter.vue'

export default {
    name: 'LoginLayout',
    components: {
        // eslint-disable-next-line vue/no-reserved-component-names
        Header,
        // eslint-disable-next-line vue/no-reserved-component-names
        Footer
    }
}
</script>

<style lang="scss" scoped>
</style>