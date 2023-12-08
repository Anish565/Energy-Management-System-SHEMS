import { create } from "zustand"
import { persist, createJSONStorage } from "zustand/middleware"

export const useUserStore = create(persist(
  (set) => ({
    user: {
      id: 1,
      name: "Anish",
    },
    setUser: (user) => set({ user }),
    clearUser: () => set({ user: null }),
  }),
  {
    name: "user-storage",
    storage: createJSONStorage(() => localStorage),
  })
)