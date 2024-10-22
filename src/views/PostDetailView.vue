<template>
  <div class="post-detail">
    <h1>Post Detail</h1>
    <p>Display the content of post with ID: {{ $route.params.id }}</p>
    <div>
      <button @click="showPostId">Show Post ID</button>
    </div>
    <div>
      <button @click="goHomeInThreeSeconds">Go Home in 3 seconds</button>
    </div>
    <div>
      <button @click="goToFirstPost">Go to first post</button>
    </div>
    <p class="back"><RouterLink to="/posts">&lt;- Back</RouterLink></p>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const showPostId = () => {
  alert(route.params.id)
}

const goHomeInThreeSeconds = () => {
  setTimeout(() => {
    router.push({ name: 'home' })
  }, 3000)
}

const goToFirstPost = () => {
  router.push({ name: 'post-detail', params: { id: 1 } })
}
</script>

<style scoped>
.post-detail p {
  margin-top: 20px;
}
.back {
  margin-top: 10px;
}
</style>
