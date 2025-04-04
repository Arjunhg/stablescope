import { NextResponse } from 'next/server'
import { rateLimit } from '../rate-limit'
import { getCachedData, setCachedData } from '@/lib/cache'
import { getTotalSupply } from '@/lib/blockchain'

const CACHE_KEY = 'pyusd-supply'

export const GET = rateLimit(async () => {
  try {
    // Check cache first
    const cachedData = getCachedData(CACHE_KEY)
    if (cachedData) {
      return NextResponse.json(cachedData)
    }

    // Fetch fresh data
    const totalSupply = await getTotalSupply()
    const data = {
      totalSupply,
      timestamp: Date.now(),
    }

    // Cache the data
    setCachedData(CACHE_KEY, data)

    return NextResponse.json(data)
  } catch (error) {
    console.error('Error fetching PYUSD supply:', error)
    return NextResponse.json(
      { error: 'Failed to fetch PYUSD supply' },
      { status: 500 }
    )
  }
}) 