import { useEffect } from "react";

export const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const clickHandler = (event) => {
      if (ref.current && ref.current.contains(event.target)) {
        return;
      }
      handler();
    };

    document.addEventListener("click", clickHandler);

    return () => document.removeEventListener("click", clickHandler);
  }, [ref, handler]);
};
