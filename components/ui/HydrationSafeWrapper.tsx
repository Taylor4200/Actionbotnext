"use client";

import { useState, useEffect, ReactNode } from "react";
import { useHydrationSafe } from "@/hooks/useHydrationSafe";

interface HydrationSafeWrapperProps {
  children: ReactNode;
  fallback?: ReactNode;
  suppressHydrationWarning?: boolean;
  forceClientOnly?: boolean;
}

export function HydrationSafeWrapper({ 
  children, 
  fallback = null, 
  suppressHydrationWarning = false,
  forceClientOnly = false 
}: HydrationSafeWrapperProps) {
  const { isHydrated, hasBrowserExtensions, shouldSuppressHydration } = useHydrationSafe();
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    // If we have browser extensions or force client-only, wait for hydration
    if (hasBrowserExtensions || forceClientOnly) {
      setShouldRender(true);
    } else {
      // Otherwise, render immediately
      setShouldRender(true);
    }
  }, [hasBrowserExtensions, forceClientOnly]);

  // If we haven't hydrated yet and we need to wait, show fallback
  if (!isHydrated || !shouldRender) {
    return <>{fallback}</>;
  }

  // If we have browser extensions and should suppress warnings, add suppressHydrationWarning
  if (suppressHydrationWarning && shouldSuppressHydration) {
    return (
      <div suppressHydrationWarning={true}>
        {children}
      </div>
    );
  }

  return <>{children}</>;
} 