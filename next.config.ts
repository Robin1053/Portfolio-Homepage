import { version } from './package.json' with { type: 'json' }
// oder bei älteren Node-Versionen:
// import { version } from './package.json' with { type: 'json' }

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_APP_VERSION: version,
  },
  output: "standalone",
  allowedDevOrigins: ['pc-robin.dc.home.arpa'],
}

export default nextConfig