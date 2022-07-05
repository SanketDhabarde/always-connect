import { useEffect } from "react";

export const useTitle = (title) => {
  useEffect(() => {
    document.title = `Always connect | ${title}`;
  }, [title]);
};
