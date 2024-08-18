import { useEffect, useRef } from "react";

export default function useOutsideClick(
  handler,
  listenCapturing = listenCapturing
) {
  const ref = useRef();
  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        handler();
      }
    }

    document.addEventListener("click", handleClick, listenCapturing);

    return () => {
      return document.removeEventListener(
        "click",
        handleClick,
        listenCapturing
      );
    };
  }, [handler]);
  return { ref };
}
