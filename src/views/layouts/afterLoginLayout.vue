<template>
    <div>
        <div>
            <Header/>
            <div>
                <router-view/>
                <Footer/>
            </div>
        </div>
    </div>
</template>
<script>
import Header from './part/TheHeader.vue'
import Footer from './part/TheFooter.vue'
export default {
    name: 'AfterLoginLayout',
    components: {
        // eslint-disable-next-line vue/no-reserved-component-names
        Header,
        // eslint-disable-next-line vue/no-reserved-component-names
        Footer
    }
}
</script>