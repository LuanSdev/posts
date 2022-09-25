import { cloneElement, ReactNode, useState } from 'react';

import { ModalPortal } from '../modal-portal';
import { Popup } from '../popup';

interface IModal {
  children: ReactNode;
}

export function Modal({ children }: IModal) {
  const [isOpen, setIsOpen] = useState(false);

  const childrenWithProps = cloneElement(children as any, {
    onClick: () => setIsOpen(true),
  });

  return (
    <>
      {childrenWithProps}

      {isOpen && (
        <ModalPortal onClose={() => setIsOpen(false)}>
          <Popup onConfirm={() => setIsOpen(false)} />
        </ModalPortal>
      )}
    </>
  );
}
