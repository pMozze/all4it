'use client';

import { FC, useEffect } from 'react';

import { useGlobalStore } from '@/shared/store';
import { type GlobalStore } from '@/shared/models/store';

const GlobalStore: FC<Omit<GlobalStore, 'init'>> = props => {
  const { init } = useGlobalStore();

  useEffect(() => {
    init(props);
  }, [props, init]);

  return null;
};

export default GlobalStore;
