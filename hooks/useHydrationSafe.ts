"use client";

import { useState, useEffect } from "react";

export function useHydrationSafe() {
  const [isHydrated, setIsHydrated] = useState(false);
  const [hasBrowserExtensions, setHasBrowserExtensions] = useState(false);

  useEffect(() => {
    // Check if we're in the browser
    if (typeof window !== "undefined") {
      setIsHydrated(true);
      
      // Check for common browser extension attributes that cause hydration issues
      const checkForExtensions = () => {
        const body = document.body;
        const hasExtensionAttributes = 
          body.hasAttribute('bis_register') ||
          body.hasAttribute('bis_skin_checked') ||
          body.hasAttribute('__processed') ||
          document.querySelector('[bis_skin_checked]') !== null ||
          document.querySelector('[__processed]') !== null;
        
        setHasBrowserExtensions(hasExtensionAttributes);
      };

      // Check immediately
      checkForExtensions();
      
      // Check after a short delay to catch extensions that load later
      const timeoutId = setTimeout(checkForExtensions, 100);
      
      // Also check on DOM changes
      const observer = new MutationObserver(checkForExtensions);
      observer.observe(document.body, {
        attributes: true,
        attributeFilter: ['bis_register', 'bis_skin_checked', '__processed'],
        subtree: true
      });

      return () => {
        clearTimeout(timeoutId);
        observer.disconnect();
      };
    }
  }, []);

  return {
    isHydrated,
    hasBrowserExtensions,
    shouldSuppressHydration: hasBrowserExtensions
  };
} 