import { defineChain } from '../../utils/chain/defineChain.js'

export const polynomialSepolia = /*#__PURE__*/ defineChain({
  id: 80008,
  name: 'Polynomial Sepolia',
  nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
  rpcUrls: {
    default: {
      http: ['https://rpc.polynomial.fi'],
    },
  },
  blockExplorers: {
    default: {
      name: 'Polynomial Sepolia Explorer',
      url: 'https://sepolia.polynomialscan.io',
      apiUrl: 'https://sepolia.polynomialscan.io/api',
    },
  },
  contracts: {
    multicall3: {
        address: '0xca11bde05977b3631167028862be2a173976ca11',
      blockCreated: 0,
    },
  },
})

