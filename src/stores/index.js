import { defineStore } from "pinia";

const useUserStore = defineStore("user", {
  state: () => {
    return { user: null };
  },
  persist: true,
});

export default useUserStore;
