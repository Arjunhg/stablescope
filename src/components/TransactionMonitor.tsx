import { FaExchangeAlt } from 'react-icons/fa'

export default function TransactionMonitor() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-900">Recent Transactions</h2>
        <FaExchangeAlt className="text-gray-400" />
      </div>
      <div className="space-y-4">
        <div className="text-center text-gray-500 py-8">
          Loading transactions...
        </div>
      </div>
    </div>
  )
} 