import { type Global } from './global';

export interface GlobalStore extends Global {
  init: (state: Omit<GlobalStore, 'init'>) => void;
}
