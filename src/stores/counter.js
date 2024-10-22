import { defineStore } from 'pinia'

export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    count: 0,
    title: 'My counter title',
  }),
  getters: {
    oddOrEven: state => {
      return state.count % 2 === 0 ? 'even' : 'odd'
    },
  },
  actions: {
    increaseCounter(number) {
      this.count += number
    },
    decreaseCounter(number) {
      this.count -= number
    },
  },
})
