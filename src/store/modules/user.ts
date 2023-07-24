import { defineStore } from "pinia";
import { Login } from "@/interface/login";
import piniaPersistConfig from "@/config/piniaPersist";

export const useUserStore = defineStore({
  id: "user",
  state: (): Login.ResLogin => ({
    agentNick: '',
    permissions: [],
    role: '',
    roleName: '',
    showBrandText: '',
    token: '',
  }),
  getters: {},
  actions: {
    // 设置userInfo
    setUserInfo(userInfo : Login.ResLogin) {
      this.$patch(userInfo);
    },
    // 清空userInfo
    clearUserInfo() {
      this.$reset();
    }
  },
  persist: piniaPersistConfig("user")
});

