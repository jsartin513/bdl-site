import { render, screen, fireEvent } from '@testing-library/react'
import { expect, test, describe } from '@jest/globals'
import TopNav from '../TopNav'

// Mock next/navigation
jest.mock('next/navigation', () => ({
  usePathname: () => '/events'
}))

describe('TopNav Accessibility', () => {
  test('mobile menu has proper ARIA attributes', () => {
    render(<TopNav />)
    
    const menuButton = screen.getByRole('button', { name: /open navigation menu/i })
    expect(menuButton.getAttribute('aria-expanded')).toBe('false')
    expect(menuButton.getAttribute('aria-controls')).toBe('mobile-menu')
    
    // Open menu
    fireEvent.click(menuButton)
    expect(menuButton.getAttribute('aria-expanded')).toBe('true')
    expect(menuButton.getAttribute('aria-label')).toBe('Close navigation menu')
  })
  
  test('navigation has proper semantics', () => {
    render(<TopNav />)
    
    const nav = screen.getByRole('navigation', { name: /main navigation/i })
    expect(nav).toBeDefined()
    
    const header = screen.getByRole('banner')
    expect(header).toBeDefined()
  })
  
  test('logo link is keyboard accessible', () => {
    render(<TopNav />)
    
    const logoLink = screen.getByRole('link', { name: /boston dodgeball league logo/i })
    expect(logoLink).toBeDefined()
    expect(logoLink.getAttribute('href')).toBe('/')
  })
  
  test('navigation links have proper aria-current', () => {
    render(<TopNav />)
    
    const eventsLink = screen.getByRole('link', { name: /^events$/i })
    expect(eventsLink.getAttribute('aria-current')).toBe('page')
  })
})
