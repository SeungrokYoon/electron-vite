import { describe, expect, it, vi } from 'vitest'
import { fireEvent, screen, render } from '@testing-library/react'
import SampleButton from './SampleButton'

describe('SampleButton', () => {
  it('should render properly', () => {
    render(<SampleButton onClick={() => null}>Click Me</SampleButton>)
    expect(screen.getByText('Click Me')).toBeInTheDocument()
  })
  it('calls onClick when clicked', () => {
    const handleClick = vi.fn()
    render(<SampleButton onClick={handleClick}>Button</SampleButton>)
    fireEvent.click(screen.getByText('Button'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
