"use client";
import { useState, useEffect } from "react";

const BREAKPOINTS = {
    mobile: 768,
    tablet: 1024,
    desktop: 1200,
  };

export function useScreenSize() {
  const [width, setWidth] = useState<number>(typeof window !== "undefined" ? window.innerWidth : BREAKPOINTS.desktop);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    // Check on mount
    setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return {
    width,
    isMobile: width < BREAKPOINTS.mobile,
    isTablet: width >= BREAKPOINTS.mobile && width < BREAKPOINTS.tablet,
    isDesktop: width >= BREAKPOINTS.tablet,
  };
}