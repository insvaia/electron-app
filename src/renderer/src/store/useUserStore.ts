import { defineStore } from 'pinia'
export const useUserStore = defineStore('user', {
  state: () => {
    return {
      user: 'zhangsan',
      token: '原始值'
    }
  },
  getters: {},
  actions: {},
  persist: true // 新插件支持直接写 true
})
