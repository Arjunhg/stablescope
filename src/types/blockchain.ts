export interface Transaction {
  hash: string
  from: string
  to: string
  value: string
  timestamp: number
  gasPrice: string
  gasUsed: string
}

export interface TransactionTrace {
  type: string
  from: string
  to: string
  value: string
  gas: string
  gasUsed: string
  input: string
  output: string
  calls?: TransactionTrace[]
}

export interface SupplyMetrics {
  totalSupply: string
  circulatingSupply: string
  burnedSupply: string
  lastUpdated: number
}

export interface HolderMetrics {
  totalHolders: number
  activeHolders: number
  topHolders: Array<{
    address: string
    balance: string
    percentage: number
  }>
}

export interface NetworkMetrics {
  averageGasPrice: string
  pendingTransactions: number
  networkUtilization: number
  lastBlockNumber: number
} 