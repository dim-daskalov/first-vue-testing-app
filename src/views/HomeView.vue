<template>
  <div class="home">
    <h2 ref="appTitleRef">{{ applicationTitle }}</h2>

    <div>
      <h3>{{ counter.title }}</h3>

      <button @click="counter.decreaseCounter(1)" class="btn">-</button>
      <button @click="counter.decreaseCounter(2)" class="btn">-2</button>
      <span class="counter">{{ counter.count }}</span>
      <button @click="counter.increaseCounter(1)" class="btn">+</button>
      <button @click="counter.increaseCounter(2)" class="btn">+2</button>
    </div>

    <p>This counter is {{ counter.oddOrEven }}</p>

    <div class="edit">
      <h4>Edit counter title:</h4>
      <input v-model="counter.title" v-autofocus type="text" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { vAutofocus } from '@/directives/vAutofocus'
import { useCounterStore } from '@/stores/counter'

const counter = useCounterStore()

const applicationTitle = 'My first vue application'

const appTitleRef = ref(null)
</script>

<style>
.home {
  text-align: center;
  padding: 20px;
}

.home h2 {
  margin-bottom: 20px;
}

.btn,
.counter {
  font-size: 40px;
  margin: 10px;
}

.edit {
  margin-top: 60px;
}
</style>
