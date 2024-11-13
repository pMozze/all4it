import { create } from 'zustand';
import { type GlobalStore } from '../models/store';

export const useGlobalStore = create<GlobalStore>(set => ({
  page: {
    title: '',
    description: ''
  },
  logotype: '',
  contacts: {
    email: '',
    telegram: ''
  },
  footer: {
    title: ''
  },
  init: (state: Omit<GlobalStore, 'init'>) => set(state)
}));
