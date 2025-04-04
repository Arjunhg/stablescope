import { FaChartLine } from 'react-icons/fa'

export default function SupplyOverview() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-900">Supply Overview</h2>
        <FaChartLine className="text-gray-400" />
      </div>
      <div className="space-y-4">
        <div className="text-center text-gray-500 py-8">
          Loading supply data...
        </div>
      </div>
    </div>
  )
} 