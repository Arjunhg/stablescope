# StableScope - PYUSD Health Dashboard

A comprehensive dashboard for monitoring PayPal's PYUSD stablecoin across multiple blockchains, powered by Google Cloud's Blockchain RPC services.

## Features

- Real-time PYUSD supply monitoring
- Cross-chain transaction tracking
- MEV (Maximal Extractable Value) analysis
- Network congestion monitoring
- Historical data visualization
- Multi-chain support (Ethereum, Solana, Polygon)

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- Ethers.js
- Google Cloud Blockchain RPC
- Jest & React Testing Library

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Google Cloud account with Blockchain RPC access
- Environment variables (see `.env.example`)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/stablescope.git
cd stablescope
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file based on `.env.example`:
```bash
cp .env.example .env.local
```

4. Update the environment variables in `.env.local` with your credentials.

### Development

Run the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:3000`.

### Testing

The project uses Jest and React Testing Library for testing. To run tests:

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage report
npm run test:coverage
```

The coverage report will be generated in the `coverage` directory. Open `coverage/lcov-report/index.html` to view the detailed coverage report.

### Building for Production

```bash
npm run build
```

The production build will be available in the `.next` directory.

## Project Structure

```
stablescope/
├── src/
│   ├── app/              # Next.js app router
│   ├── components/       # React components
│   ├── lib/             # Utility functions
│   ├── types/           # TypeScript types
│   └── styles/          # Global styles
├── public/              # Static assets
└── tests/              # Test files
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
