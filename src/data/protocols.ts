export interface Protocol {
  id: string
  name: string
  category: string
  description: string
  founded: string
  tvl: string
  features: string[]
  keyFacts: {
    label: string
    value: string
  }[]
  medicalNote?: string
  didYouKnow: string
  color: string
}

export const protocols: Protocol[] = [
  {
    id: 'ethereum',
    name: 'Ethereum',
    category: 'Smart Contract Platform',
    description: 'The decentralized computation network that powers decentralized applications.',
    founded: '2015',
    tvl: '$37.2B',
    features: [
      'Smart Contracts',
      'dApps',
      'DeFi',
      'Layer 2 Scaling',
      'PoS Consensus'
    ],
    keyFacts: [
      { label: 'Block Time', value: '~12 seconds' },
      { label: 'Gas Unit', value: 'Wei (smallest unit)' },
      { label: 'Consensus', value: 'Proof of Stake' },
      { label: 'Max Supply', value: 'Unlimited' },
      { label: 'Annual Fees', value: '$15B+ burned' },
      { label: 'Networks', value: '1 Main + 100+ L2s' }
    ],
    medicalNote: 'Its EVM (Ethereum Virtual Machine) is the industry standard for smart contract execution.',
    didYouKnow: 'Ethereum was proposed in 2013 by programmer Vitalik Buterin when he was just 19 years old, and went live on July 30, 2015.',
    color: '#627eea'
  },
  {
    id: 'bitcoin',
    name: 'Bitcoin',
    category: 'Digital Currency',
    description: 'The first decentralized peer-to-peer electronic cash system and digital store of value.',
    founded: '2009',
    tvl: 'N/A',
    features: [
      'UTXO Model',
      'PoW Consensus',
      'Digital Scarcity',
      'Immutability',
      'Lightning Network'
    ],
    keyFacts: [
      { label: 'Block Time', value: '~10 minutes' },
      { label: 'Max Supply', value: '21 Million BTC' },
      { label: 'Consensus', value: 'Proof of Work' },
      { label: 'Block Reward', value: '6.25 BTC' },
      { label: 'Difficulty', value: 'Adjusts every 2016 blocks' },
      { label: 'Hash Algorithm', value: 'SHA-256' }
    ],
    medicalNote: 'Bitcoin\'s mining difficulty automatically adjusts to maintain consistent 10-minute block times.',
    didYouKnow: 'Bitcoin\'s creator, Satoshi Nakamoto, is pseudonymous, and the first 50 BTC block reward has never been spent.',
    color: '#f7931a'
  },
  {
    id: 'solana',
    name: 'Solana',
    category: 'High-Speed Blockchain',
    description: 'A high-performance blockchain network designed for speed and scalability without sacrificing decentralization.',
    founded: '2017',
    tvl: '$4.8B',
    features: [
      'Proof of History',
      'Sub-second Finality',
      'Parallel Processing',
      'Low Fees',
      'Developer-Friendly'
    ],
    keyFacts: [
      { label: 'TPS', value: '65,000+ transactions/sec' },
      { label: 'Block Time', value: '400ms' },
      { label: 'Consensus', value: 'PoH + PoS' },
      { label: 'Avg. Fee', value: '~$0.00025' },
      { label: 'Staking Reward', value: '8-12% APY' },
      { label: 'Native Token', value: 'SOL' }
    ],
    medicalNote: 'Proof of History (PoH) is Solana\'s cryptographic clock that timestamps transactions before consensus.',
    didYouKnow: 'Solana can process 400,000 transactions per second theoretically, making it one of the fastest blockchains.',
    color: '#14f195'
  },
  {
    id: 'polygon',
    name: 'Polygon',
    category: 'Layer 2 Scaling',
    description: 'A scalability solution for Ethereum that enables faster and cheaper transactions while inheriting security.',
    founded: '2017',
    tvl: '$2.1B',
    features: [
      'Plasma',
      'Sidechains',
      'Zero-Knowledge Proofs',
      'Ethereum Security',
      'EVM Compatible'
    ],
    keyFacts: [
      { label: 'Block Time', value: '2-3 seconds' },
      { label: 'Gas Reduction', value: '99% cheaper' },
      { label: 'TPS', value: '7,000+' },
      { label: 'Settlement', value: 'Ethereum secured' },
      { label: 'dApps', value: '3,000+' },
      { label: 'Validators', value: '100+' }
    ],
    medicalNote: 'Polygon uses multiple scaling solutions: Plasma for assets, Sidechains for general dApps, and Rollups for DeFi.',
    didYouKnow: 'Polygon was formerly known as Matic Network and rebranded to emphasize its multi-chain vision.',
    color: '#8247e5'
  },
  {
    id: 'arbitrum',
    name: 'Arbitrum',
    category: 'Optimistic Rollup',
    description: 'A Layer 2 scaling solution using optimistic rollups for high throughput and Ethereum security.',
    founded: '2018',
    tvl: '$3.4B',
    features: [
      'Optimistic Rollups',
      'EVM Compatible',
      'Fast Withdrawals',
      'Low Fees',
      'Strong Security'
    ],
    keyFacts: [
      { label: 'TPS', value: '4,500+' },
      { label: 'Block Time', value: '250ms' },
      { label: 'Finality', value: '~7 days (fast: 1 hour)' },
      { label: 'Gas Savings', value: '80-90% reduction' },
      { label: 'Challenge Window', value: '7 days' },
      { label: 'Sequencer', value: 'Arbitrum Foundation' }
    ],
    medicalNote: 'Arbitrum\'s dispute resolution mechanism allows anyone to challenge incorrect transaction batches.',
    didYouKnow: 'Arbitrum One processed over $100B in total volume and hosts 1000+ dApps since launch.',
    color: '#28a0f0'
  }
]
