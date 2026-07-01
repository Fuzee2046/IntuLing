import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'

import App from './App'
import { QueryProvider } from './providers/query-provider'

describe('App', () => {
  it('renders the learning workspace', () => {
    render(
      <BrowserRouter>
        <QueryProvider>
          <App />
        </QueryProvider>
      </BrowserRouter>,
    )

    expect(screen.getByText('英语学习对话')).toBeInTheDocument()
  })
})
