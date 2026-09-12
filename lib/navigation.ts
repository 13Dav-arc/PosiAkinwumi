/**
 * Clean URL smooth scroll utility.
 * Intercepts anchor navigation to prevent raw #hash appending in the address bar,
 * triggers Lenis on desktop (or native smooth scroll with header offset on mobile),
 * and keeps window.history clean.
 */
export function smoothScrollTo(targetId: string, offset = -80) {
  if (typeof window === "undefined") return;

  const cleanId = targetId.startsWith("#") ? targetId.slice(1) : targetId;
  const targetElement = document.getElementById(cleanId);

  if (targetElement) {
    if ((window as any).lenis) {
      (window as any).lenis.scrollTo(targetElement, { offset });
    } else {
      // Mobile native fallback with accurate header offset
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset + offset;
      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: "smooth",
      });
    }
  }

  // Strip any trailing hash from the browser address bar
  requestAnimationFrame(() => {
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname);
    }
  });
}
