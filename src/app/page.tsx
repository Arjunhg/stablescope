import DashboardHeader from '@/components/DashboardHeader'
import DashboardStats from '@/components/DashboardStats'
import TransactionMonitor from '@/components/TransactionMonitor'
import SupplyOverview from '@/components/SupplyOverview'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <DashboardHeader />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        <DashboardStats />
        <TransactionMonitor />
        <SupplyOverview />
      </div>
    </div>
  )
}
