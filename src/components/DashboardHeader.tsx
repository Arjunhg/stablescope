import Link from 'next/link'

export default function DashboardHeader() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/" className="text-2xl font-bold text-gray-900">
              StableScope
            </Link>
            <span className="text-sm text-gray-500">PYUSD Health Dashboard</span>
          </div>
          <nav className="flex items-center space-x-6">
            <Link href="/" className="text-gray-600 hover:text-gray-900">
              Overview
            </Link>
            <Link href="/transactions" className="text-gray-600 hover:text-gray-900">
              Transactions
            </Link>
            <Link href="/analytics" className="text-gray-600 hover:text-gray-900">
              Analytics
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
} 