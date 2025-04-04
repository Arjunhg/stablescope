import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import DashboardHeader from '../DashboardHeader'

describe('DashboardHeader', () => {
  it('renders the title and navigation links', () => {
    render(<DashboardHeader />)

    // Check if the title is rendered
    expect(screen.getByText('StableScope')).toBeInTheDocument()
    expect(screen.getByText('PYUSD Health Dashboard')).toBeInTheDocument()

    // Check if navigation links are rendered
    expect(screen.getByText('Overview')).toBeInTheDocument()
    expect(screen.getByText('Transactions')).toBeInTheDocument()
    expect(screen.getByText('Analytics')).toBeInTheDocument()
  })

  it('has correct navigation links', () => {
    render(<DashboardHeader />)

    const overviewLink = screen.getByText('Overview')
    const transactionsLink = screen.getByText('Transactions')
    const analyticsLink = screen.getByText('Analytics')

    expect(overviewLink).toHaveAttribute('href', '/')
    expect(transactionsLink).toHaveAttribute('href', '/transactions')
    expect(analyticsLink).toHaveAttribute('href', '/analytics')
  })
}) 