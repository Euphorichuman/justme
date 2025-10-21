import { useEffect, useState } from "react";

export function useIsMobile(MOBILE_BREAKPOINT = 768) {
  const [isMobile, setIsMobile] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return window.innerWidth < MOBILE_BREAKPOINT;
  });

  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);

    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };

    if (mql.addEventListener) {
      mql.addEventListener("change", onChange);
    } else {
      mql.addListener(onChange);
    }

    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);

    return () => {
      if (mql.removeEventListener) {
        mql.removeEventListener("change", onChange);
      } else {
        mql.removeListener(onChange);
      }
    };
  }, [MOBILE_BREAKPOINT]);

  return isMobile;
}
