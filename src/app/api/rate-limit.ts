import { NextResponse } from 'next/server'
import { headers } from 'next/headers'

const RATE_LIMIT = 100 // requests per minute
const RATE_LIMIT_WINDOW = 60 * 1000 // 1 minute in milliseconds

const requestCounts = new Map<string, { count: number; resetTime: number }>()

export const rateLimit = (handler: Function) => {
  return async (req: Request) => {
    const ip = headers().get('x-forwarded-for') || 'unknown'
    const now = Date.now()

    // Get or initialize rate limit data for this IP
    const rateLimitData = requestCounts.get(ip) || {
      count: 0,
      resetTime: now + RATE_LIMIT_WINDOW,
    }

    // Reset count if window has passed
    if (now > rateLimitData.resetTime) {
      rateLimitData.count = 0
      rateLimitData.resetTime = now + RATE_LIMIT_WINDOW
    }

    // Check if rate limit exceeded
    if (rateLimitData.count >= RATE_LIMIT) {
      return NextResponse.json(
        { error: 'Rate limit exceeded' },
        { status: 429 }
      )
    }

    // Increment count
    rateLimitData.count++
    requestCounts.set(ip, rateLimitData)

    // Call the handler
    return handler(req)
  }
} 