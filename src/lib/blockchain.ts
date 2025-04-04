import { ethers } from 'ethers'
import axios from 'axios'

const PYUSD_CONTRACT = process.env.NEXT_PUBLIC_PYUSD_CONTRACT || '0x6c3ea9036406852006290770BEdFcAbA0e23A0e8'
const RPC_URL = process.env.NEXT_PUBLIC_GCP_RPC_URL

// PYUSD ABI (minimal for basic interactions)
const PYUSD_ABI = [
  'function totalSupply() view returns (uint256)',
  'function balanceOf(address) view returns (uint256)',
  'function decimals() view returns (uint8)',
]

export const getProvider = () => {
  const rpcUrl = process.env.NEXT_PUBLIC_GCP_RPC_URL; 
  if (!rpcUrl) throw new Error('RPC URL not configured')
  return new ethers.JsonRpcProvider(rpcUrl)
}


export const getPYUSDContract = () => {
  const provider = getProvider()
  return new ethers.Contract(PYUSD_CONTRACT, PYUSD_ABI, provider)
}

export const getTotalSupply = async () => {
  const contract = getPYUSDContract()
  const supply = await contract.totalSupply()
  const decimals = await contract.decimals()
  return ethers.formatUnits(supply, decimals)
}

export const getBalance = async (address: string) => {
  const contract = getPYUSDContract()
  const balance = await contract.balanceOf(address)
  const decimals = await contract.decimals()
  return ethers.formatUnits(balance, decimals)
}

export const getTransactionTrace = async (txHash: string) => {
  if (!RPC_URL) throw new Error('RPC URL not configured')
  
  const response = await axios.post(RPC_URL, {
    jsonrpc: '2.0',
    method: 'debug_traceTransaction',
    params: [txHash, { tracer: 'callTracer' }],
    id: 1,
  })

  return response.data.result
} 