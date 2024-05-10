<template>
  <div>
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, provide, reactive } from 'vue';

  const state = reactive({
    isMobile: false
  })

  provide(
    "isMobile",
    computed(() => state.isMobile)
  )

  //function help
  function onResize(){
    state.isMobile = window.innerWidth < 960
  }


  onMounted(() => {
    window.addEventListener("resize", onResize, {passive: true})
  })

</script>

<style lang="scss">
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    padding: 0;
    margin-top: 0;
  }
}

</style>
