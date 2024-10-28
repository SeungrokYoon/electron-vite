import { describe, it } from 'vitest'
import { render } from '@testing-library/react'
import Quote from './SampleQuote'

describe('Quote', () => {
  it('should render properly', () => {
    render(<Quote quote="What a nice day." />)
  })
})
