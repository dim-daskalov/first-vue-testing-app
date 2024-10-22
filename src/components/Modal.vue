<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <teleport to=".modals-container">
    <div v-if="modelValue" class="modal">
      <h1>
        {{ props.title }}
      </h1>
      <slot />
      <button @click="handleClick">Hide modal</button>
      <p>Username is: {{ userData.username }}</p>
    </div>
  </teleport>
</template>

<script setup>
import { inject } from 'vue'

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: 'Modal title',
  },
})

const emit = defineEmits(['update:modelValue'])

const handleClick = () => {
  emit('update:modelValue', false)
}

const userData = inject('userData')
</script>

<style scoped>
.modal {
  background-color: beige;
  padding: 10px;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  color: black;
}
</style>
