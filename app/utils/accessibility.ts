/**
 * Accessibility utility functions for the Boston Dodgeball League website
 */

/**
 * Generates a unique ID for form elements and their labels
 */
export function generateId(prefix: string): string {
  return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * Announces content to screen readers
 */
export function announceToScreenReader(message: string, priority: 'polite' | 'assertive' = 'polite'): void {
  const announcement = document.createElement('div');
  announcement.setAttribute('aria-live', priority);
  announcement.setAttribute('aria-atomic', 'true');
  announcement.className = 'sr-only';
  announcement.textContent = message;
  
  document.body.appendChild(announcement);
  
  // Remove the announcement after it's been read
  setTimeout(() => {
    document.body.removeChild(announcement);
  }, 1000);
}

/**
 * Focuses an element with fallback for browsers that don't support focus()
 */
export function focusElement(element: HTMLElement | null): void {
  if (!element) return;
  
  try {
    element.focus();
  } catch {
    // Fallback for elements that can't be focused
    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}

/**
 * Traps focus within a container (useful for modals and mobile menus)
 */
export function trapFocus(container: HTMLElement): () => void {
  const focusableElements = container.querySelectorAll(
    'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
  );
  
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;
  
  function handleKeyDown(event: KeyboardEvent) {
    if (event.key !== 'Tab') return;
    
    if (event.shiftKey) {
      if (document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      }
    } else {
      if (document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    }
  }
  
  container.addEventListener('keydown', handleKeyDown);
  
  // Return cleanup function
  return () => {
    container.removeEventListener('keydown', handleKeyDown);
  };
}

/**
 * Checks if an element is visible to assistive technologies
 */
export function isElementVisible(element: HTMLElement): boolean {
  const style = window.getComputedStyle(element);
  return (
    style.display !== 'none' &&
    style.visibility !== 'hidden' &&
    style.opacity !== '0' &&
    element.offsetWidth > 0 &&
    element.offsetHeight > 0
  );
}

/**
 * Gets the accessible name of an element
 */
export function getAccessibleName(element: HTMLElement): string {
  const ariaLabel = element.getAttribute('aria-label');
  if (ariaLabel) return ariaLabel;
  
  const ariaLabelledBy = element.getAttribute('aria-labelledby');
  if (ariaLabelledBy) {
    const labelElement = document.getElementById(ariaLabelledBy);
    if (labelElement) return labelElement.textContent || '';
  }
  
  // For form elements, check for associated label
  if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA' || element.tagName === 'SELECT') {
    const id = element.getAttribute('id');
    if (id) {
      const label = document.querySelector(`label[for="${id}"]`);
      if (label) return label.textContent || '';
    }
  }
  
  return element.textContent || '';
}

/**
 * Color contrast checking utility
 */
export function hasGoodContrast(foreground: string, background: string): boolean {
  // This is a simplified version - in a real app you'd want a more robust color contrast checker
  // For now, we'll assume good contrast for common combinations
  const commonGoodContrasts = [
    { fg: '#000000', bg: '#ffffff' }, // black on white
    { fg: '#ffffff', bg: '#000000' }, // white on black
    { fg: '#1e40af', bg: '#ffffff' }, // blue-700 on white
    { fg: '#ffffff', bg: '#1e40af' }, // white on blue-700
  ];
  
  return commonGoodContrasts.some(
    contrast => contrast.fg.toLowerCase() === foreground.toLowerCase() && 
                contrast.bg.toLowerCase() === background.toLowerCase()
  );
}
