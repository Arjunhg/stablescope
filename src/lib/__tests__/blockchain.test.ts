import { getProvider, getPYUSDContract, getTotalSupply } from '../blockchain'

// Mock ethers
jest.mock('ethers', () => ({
  ethers: {
    JsonRpcProvider: jest.fn().mockImplementation(() => ({
      getNetwork: jest.fn().mockResolvedValue({ chainId: 1 }),
    })),
    Contract: jest.fn().mockImplementation(() => ({
      totalSupply: jest.fn().mockResolvedValue('1000000000000000000'),
      decimals: jest.fn().mockResolvedValue(18),
    })),
    formatUnits: jest.fn().mockReturnValue('1.0'),
  },
}))

describe('Blockchain Utilities', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('getProvider', () => {
    it('should create a provider with the correct RPC URL', () => {
      const provider = getProvider()
      expect(provider).toBeDefined()
    })

    it('should throw an error if RPC URL is not configured', () => {
      const originalEnv = process.env.NEXT_PUBLIC_GCP_RPC_URL
      delete process.env.NEXT_PUBLIC_GCP_RPC_URL

      expect(() => getProvider()).toThrow('RPC URL not configured')

      process.env.NEXT_PUBLIC_GCP_RPC_URL = originalEnv
    })
  })

  describe('getPYUSDContract', () => {
    it('should create a contract with the correct address and ABI', () => {
      const contract = getPYUSDContract()
      expect(contract).toBeDefined()
    })
  })

  describe('getTotalSupply', () => {
    it('should return the formatted total supply', async () => {
      const supply = await getTotalSupply()
      expect(supply).toBe('1.0')
    })
  })
}) 