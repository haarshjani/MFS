import {  useCallback, useState } from 'react';

export const useDisclosure  = (initialState : boolean = false) => {
  const [isOpen, setIsOpen] = useState<boolean>(initialState);

  const open = useCallback(() => setIsOpen(true), []);
  
  const toggleDrawer = useCallback(() => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setIsOpen(prev => !prev);
    }, []);
     const close = useCallback(() => setIsOpen(false), []);

  return { isOpen, open,close, toggleDrawer };
}
