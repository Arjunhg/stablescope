export const verifyEnv = () => {
  const requiredEnvVars = [
    'NEXT_PUBLIC_GCP_RPC_URL',
    'NEXT_PUBLIC_GCP_WS_URL',
    'NEXT_PUBLIC_PYUSD_CONTRACT',
    'GOOGLE_CLOUD_PROJECT'
  ]

  const missingVars = requiredEnvVars.filter(
    (envVar) => !process.env[envVar]
  )

  if (missingVars.length > 0) {
    throw new Error(
      `Missing required environment variables: ${missingVars.join(', ')}`
    )
  }
}

// Verify environment variables on startup
if (typeof window === 'undefined') {
  verifyEnv()
} 