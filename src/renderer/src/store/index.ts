import { defineStore } from 'pinia'
import { useUserStore } from './useUserStore'
const store = defineStore('storeId', {
  state: () => {
    return {
      user: useUserStore()
    }
  },
  getters: {},
  actions: {}
})

export default store
