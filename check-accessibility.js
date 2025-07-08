#!/usr/bin/env node

/**
 * Basic accessibility verification script for the Boston Dodgeball League website
 * This script checks for common accessibility patterns in the built files
 */

const fs = require('fs');
const path = require('path');

console.log('🔍 Checking accessibility implementation...\n');

// Check if key accessibility features are implemented
const checkAccessibilityFeatures = () => {
  const checks = [];
  
  // Check TopNav component for accessibility features
  const topNavPath = path.join(__dirname, 'app/components/TopNav.tsx');
  if (fs.existsSync(topNavPath)) {
    const topNavContent = fs.readFileSync(topNavPath, 'utf8');
    
    checks.push({
      name: 'TopNav has ARIA attributes for mobile menu',
      passed: topNavContent.includes('aria-expanded') && topNavContent.includes('aria-controls'),
      details: 'Mobile menu button has proper ARIA attributes'
    });
    
    checks.push({
      name: 'TopNav has semantic roles',
      passed: topNavContent.includes('role="banner"') && topNavContent.includes('role="navigation"'),
      details: 'Header and navigation have semantic roles'
    });
    
    checks.push({
      name: 'TopNav has keyboard navigation support',
      passed: topNavContent.includes('addEventListener') && topNavContent.includes('Escape'),
      details: 'Keyboard event handlers are implemented'
    });
    
    checks.push({
      name: 'TopNav has focus management',
      passed: topNavContent.includes('focus()') && topNavContent.includes('focus:'),
      details: 'Focus management and styling are implemented'
    });
  }
  
  // Check layout for skip links
  const layoutPath = path.join(__dirname, 'app/layout.tsx');
  if (fs.existsSync(layoutPath)) {
    const layoutContent = fs.readFileSync(layoutPath, 'utf8');
    
    checks.push({
      name: 'Skip to main content link exists',
      passed: layoutContent.includes('Skip to main content') && layoutContent.includes('#main-content'),
      details: 'Skip link for keyboard navigation is present'
    });
    
    checks.push({
      name: 'Main content has proper ID and tabindex',
      passed: layoutContent.includes('id="main-content"') && layoutContent.includes('tabIndex={-1}'),
      details: 'Main content is properly marked for skip link target'
    });
  }
  
  // Check CSS for accessibility features
  const cssPath = path.join(__dirname, 'app/globals.css');
  if (fs.existsSync(cssPath)) {
    const cssContent = fs.readFileSync(cssPath, 'utf8');
    
    checks.push({
      name: 'Screen reader only styles are defined',
      passed: cssContent.includes('.sr-only') && cssContent.includes('position: absolute'),
      details: 'CSS classes for screen reader only content'
    });
    
    checks.push({
      name: 'Reduced motion support is implemented',
      passed: cssContent.includes('prefers-reduced-motion'),
      details: 'Respects user preference for reduced motion'
    });
    
    checks.push({
      name: 'High contrast mode support',
      passed: cssContent.includes('prefers-contrast'),
      details: 'Support for high contrast displays'
    });
  }
  
  // Check TabbedLayout for accessibility
  const tabbedLayoutPath = path.join(__dirname, 'app/components/TabbedLayout.tsx');
  if (fs.existsSync(tabbedLayoutPath)) {
    const tabbedContent = fs.readFileSync(tabbedLayoutPath, 'utf8');
    
    checks.push({
      name: 'TabbedLayout has proper ARIA tablist implementation',
      passed: tabbedContent.includes('role="tablist"') && tabbedContent.includes('role="tab"'),
      details: 'Tabs are properly implemented with ARIA'
    });
    
    checks.push({
      name: 'TabbedLayout has keyboard navigation',
      passed: tabbedContent.includes('ArrowLeft') && tabbedContent.includes('ArrowRight'),
      details: 'Arrow key navigation between tabs'
    });
  }
  
  // Check Carousel for accessibility
  const carouselPath = path.join(__dirname, 'app/components/Carousel.tsx');
  if (fs.existsSync(carouselPath)) {
    const carouselContent = fs.readFileSync(carouselPath, 'utf8');
    
    checks.push({
      name: 'Carousel has play/pause controls',
      passed: carouselContent.includes('Play') && carouselContent.includes('Pause'),
      details: 'Carousel can be controlled by users'
    });
    
    checks.push({
      name: 'Carousel has live region for announcements',
      passed: carouselContent.includes('aria-live="polite"'),
      details: 'Screen readers are notified of slide changes'
    });
  }
  
  return checks;
};

// Run checks
const results = checkAccessibilityFeatures();

// Display results
console.log('📊 Accessibility Check Results:\n');

let passedCount = 0;
let totalCount = results.length;

results.forEach((check, index) => {
  const icon = check.passed ? '✅' : '❌';
  const status = check.passed ? 'PASS' : 'FAIL';
  
  console.log(`${icon} [${status}] ${check.name}`);
  console.log(`   ${check.details}`);
  console.log('');
  
  if (check.passed) passedCount++;
});

console.log(`\n📈 Summary: ${passedCount}/${totalCount} checks passed`);

if (passedCount === totalCount) {
  console.log('🎉 All accessibility checks passed!');
  process.exit(0);
} else {
  console.log('⚠️  Some accessibility improvements may still be needed.');
  process.exit(1);
}
