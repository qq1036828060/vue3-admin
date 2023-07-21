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
    // login
    login(userInfo : Login.ResLogin) {
      this.$patch(userInfo);
    },
    // loginOut
    loginOut() {
      // 清空所有state的数据
      this.$reset();
    }
  },
  persist: piniaPersistConfig("user")
});

