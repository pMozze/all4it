'use client';

import { FC, PropsWithChildren, useRef, useEffect, ComponentPropsWithoutRef } from 'react';

import { Fancybox as NativeFancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';

interface Props extends PropsWithChildren, ComponentPropsWithoutRef<'div'> {
  selector?: string;
}

const Fancybox: FC<Props> = ({ children, selector = '[data-fancybox]', ...props }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    NativeFancybox.bind(container, selector);

    return () => {
      NativeFancybox.unbind(container);
      NativeFancybox.close();
    };
  });

  return (
    <div ref={containerRef} {...props}>
      {children}
    </div>
  );
};

export default Fancybox;
