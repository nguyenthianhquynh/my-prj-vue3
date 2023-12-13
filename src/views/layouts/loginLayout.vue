<template>
    <div class = "wrapper">
        <div>
            layouts login
            <Header />
            <div>
                <router-view /> 
                <Footer />
            </div>
        </div>
    </div>
</template>

<script>
import Header from './part/TheHeader.vue'
import Footer from './part/TheFooter.vue'

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
.wrapper {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    justify-content: space-between;
    background-color: #f5f5f5;
}
</style>