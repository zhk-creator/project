import { create } from "zustand";

const useTimerStore = create((set) => ({
  seconds: 0,
  running: false,

  start: () => set({ running: true }),
  stop: () => set({ running: false }),
  reset: () => set({ seconds: 0 }),
  tick: () => set((s) => ({ seconds: s.seconds + 1 })),
}));

export default useTimerStore;