import { cloneElement, ReactNode, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import { Overlay } from './styles';

interface IModalPortal {
  children: ReactNode;
  onClose?: () => void;
}

export function ModalPortal({ children, onClose }: IModalPortal) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    return () => setIsMounted(false);
  }, []);

  if (!isMounted) return null;

  const modalRoot = document.getElementById('modal-root');

  const childrenWithoutPropagation = cloneElement(children as any, {
    onClick: (e) => e.stopPropagation(),
  });

  const ChildrenWithOverlay = (
    <Overlay onClick={onClose}>{childrenWithoutPropagation}</Overlay>
  );

  return modalRoot ? createPortal(ChildrenWithOverlay, modalRoot) : null;
}
