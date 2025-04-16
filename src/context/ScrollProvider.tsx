import { useRef } from "react";
import { ScrollContext } from "./ScrollContext";
import { ReactNode } from "react";

export const ScrollProvider = ({ children }: { children: ReactNode }) => {
  const scrollRef = useRef<HTMLDivElement>(null); 

  return (
    <ScrollContext.Provider value={{ scrollRef }}>
      {children}
    </ScrollContext.Provider>
  );
};
