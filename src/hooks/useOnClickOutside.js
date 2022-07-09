import { useEffect } from "react";

export const useOnClickOutside = (ref, handler) => {
  const clickHandler = (event) => {
    if (ref.current && ref.current.contains(event.target)) {
      return;
    }
    handler();
  };
  useEffect(() => {
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  }, [ref, handler]);
};
