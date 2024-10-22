<template>
  <div class="posts">
    <h1>Posts</h1>

    <ul>
      <li v-for="post in posts" :key="post.id">
        <RouterLink :to="`/post-detail/${post.id}`">{{
          post.title
        }}</RouterLink>
      </li>
    </ul>
  </div>

  <div>
    <button
      class="counter-button"
      :class="counter.oddOrEven === 'odd' && 'yellow'"
      @click="counter.increaseCounter(1)"
    >
      {{ counter.count }}
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useCounterStore } from '@/stores/counter'

const counter = useCounterStore()

const posts = ref([
  { id: 1, title: 'First Post' },
  { id: 2, title: 'Second Post' },
  { id: 3, title: 'Third Post' },
])
</script>

<style scoped>
.posts ul {
  margin-top: 20px;
}

.counter-button {
  margin-top: 10px;
  font-size: 60px;
  width: 100%;
  background-color: pink;
}

.counter-button.yellow {
  background-color: yellow;
}
</style>
