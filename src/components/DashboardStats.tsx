import { FaCoins, FaExchangeAlt, FaUsers } from 'react-icons/fa'

export default function DashboardStats() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Key Metrics</h2>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <FaCoins className="text-blue-500 text-xl" />
            <span className="text-gray-600">Total Supply</span>
          </div>
          <span className="text-gray-900 font-medium">Loading...</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <FaExchangeAlt className="text-green-500 text-xl" />
            <span className="text-gray-600">24h Volume</span>
          </div>
          <span className="text-gray-900 font-medium">Loading...</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <FaUsers className="text-purple-500 text-xl" />
            <span className="text-gray-600">Active Holders</span>
          </div>
          <span className="text-gray-900 font-medium">Loading...</span>
        </div>
      </div>
    </div>
  )
} 