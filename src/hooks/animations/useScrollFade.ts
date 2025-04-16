import { useEffect, useState, useRef, RefObject } from "react";

export const useScrollFade = <T extends HTMLElement>(threshold: number = 0.32): [RefObject<T | null>, boolean] => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const ref = useRef<T>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.boundingClientRect.top > 0) {
          setIsVisible(entry.isIntersecting);
        }
      },
      { threshold }
    );

    const element = ref.current;
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [threshold]);

  return [ref, isVisible];
};
