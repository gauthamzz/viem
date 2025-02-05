import { defineChain } from '../../utils/chain/defineChain.js'

export const polynomial = /*#__PURE__*/ defineChain({
  id: 8008,
  name: 'Polynomial',
  nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
  rpcUrls: {
    default: {
      http: ['https://rpc.polynomial.fi'],
    },
  },
  blockExplorers: {
    default: {
      name: 'Polynomial Explorer',
      url: 'https://polynomialscan.io',
      apiUrl: 'https://polynomialscan.io/api',
    },
  },
  contracts: {
    multicall3: {
        address: '0xca11bde05977b3631167028862be2a173976ca11',
        blockCreated: 0,
    },
  },
})

