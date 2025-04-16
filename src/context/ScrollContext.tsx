

import { createContext } from "react";
export interface ScrollContextType {
  scrollRef: React.RefObject<HTMLDivElement | null>;
}


export const ScrollContext = createContext<ScrollContextType | null>(null);
