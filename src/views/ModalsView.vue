<template>
  <div class="modals">
    <h1>Modals</h1>
    <div class="show-dark-modals">
      <label>
        Show dark modals?
        <input v-model="showDarkModal" type="checkbox" />
      </label>
    </div>
    <button @click="showModal = true">Show Modal</button>
    <component
      v-model="showModal"
      :is="showDarkModal ? ModalDark : Modal"
      title="My new title (via props)"
    >
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui et fugit,
        eligendi quos nostrum repellendus deserunt mollitia nulla ipsa ipsum?
        Perferendis architecto accusantium dolores doloribus dolorem voluptas
        magnam optio mollitia.
      </p>
    </component>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Modal from '@/components/Modal.vue'
import ModalDark from '@/components/ModalDark.vue'

const showModal = ref(false)

const showDarkModal = ref(false)
</script>

<style scoped>
.modals h1 {
  margin-bottom: 20px;
}

.show-dark-modals {
  margin-bottom: 10px;
}
</style>
