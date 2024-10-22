import { reactive, computed, watch, nextTick } from 'vue'

const counterData = reactive({
  count: 0,
  title: 'My Counter',
})

export const useCounter = () => {
  watch(
    () => counterData.count,
    newCount => {
      if (newCount === 20) {
        alert('Congratulations you have reached count 20!!')
      }
    },
  )

  const oddOrEven = computed(() => {
    return counterData.count % 2 === 0 ? 'even' : 'odd'
  })

  const increaseCounter = async amount => {
    counterData.count += amount
    await nextTick()
    console.log('test nextTick')
  }

  const decreaseCounter = amount => {
    counterData.count -= amount
  }

  return {
    counterData,
    oddOrEven,
    increaseCounter,
    decreaseCounter,
  }
}
