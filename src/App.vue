<template>
  <div class="user-data">
    {{ userData.user }} @{{ userData.username }} | Network Status:
    <span :style="{ color: online ? 'green' : 'red' }">{{
      online ? 'Online' : 'Offline'
    }}</span>
  </div>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/posts">Posts</RouterLink>
      <RouterLink to="/modals">Modals</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<script setup>
import { provide, reactive } from 'vue'
import { useOnline } from '@vueuse/core'

const online = useOnline()

const userData = reactive({
  user: 'dimitar',
  username: 'dimitardaskalov',
})

provide('userData', userData)
</script>

<style scoped>
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
  margin-top: 2rem;
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

.user-data {
  position: absolute;
  background: var(--color-text);
  top: 0;
  right: 0;
  font-size: 12px;
  padding: 5px;
  color: white;
}
</style>
