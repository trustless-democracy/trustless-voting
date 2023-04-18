import { configureChains, createClient } from 'wagmi'
import { goerli, mainnet } from 'wagmi/chains'
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'
import { 
  SocialWalletConnector,
  GoogleSocialWalletConnector, 
  FacebookSocialWalletConnector, 
  GithubSocialWalletConnector,
  DiscordSocialWalletConnector,
  TwitchSocialWalletConnector,
  TwitterSocialWalletConnector,
} from '@zerodevapp/wagmi'

import { publicProvider } from 'wagmi/providers/public'

// export const projectId = 'b5486fa4-e3d9-450b-8428-646e757c10f6' // working
// export const projectId = 'cdf82e89-40e8-49e4-8c74-724e0949ce3b' // Fuji (Avalance)
export const projectId = '89fece6b-a511-4197-9c6f-dd206b83c301' // Mumbai
// export const projectId = '5310f15b-ab99-49c4-af3b-5d719fd2788a' // Goerly
// export const projectId = '52934819-2d69-48a5-ad26-648ff9cc7174' // Polygon

const options = { options: { projectId } }

const { chains, provider, webSocketProvider } = configureChains(
  [mainnet, ...(process.env.NODE_ENV === 'development' ? [goerli] : [])],
  [
    publicProvider(),
  ],
)

export const client = createClient({
  autoConnect: true,
  connectors: [
    new SocialWalletConnector(options)/*,
    new GoogleSocialWalletConnector(options),
    new FacebookSocialWalletConnector(options),
    new GithubSocialWalletConnector(options),
    new DiscordSocialWalletConnector(options),
    new TwitchSocialWalletConnector(options),
    new TwitterSocialWalletConnector(options),
    new MetaMaskConnector({ chains }),
    new CoinbaseWalletConnector({
      chains,
      options: {
        appName: 'wagmi',
      },
    }),
    new WalletConnectConnector({
      chains,
      options: {
        qrcode: true,
      },
    }),
    new InjectedConnector({
      chains,
      options: {
        name: 'Injected',
        shimDisconnect: true,
      },
    }),*/
  ],
  provider,
  webSocketProvider,
})
