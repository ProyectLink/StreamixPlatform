// src/hooks/useScrollRef.ts
import { useContext } from 'react';
import { ScrollContext } from '@context/ScrollContext'; 


export const useScrollRef = () => {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error('useScrollRef debe ser usado dentro de un ScrollProvider');
  }
  return context; // Retorna el scrollRef
};
