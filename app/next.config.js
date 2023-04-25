/** @type {import('next').NextConfig} */
const prod = process.env.NODE_ENV === 'production'
// https://www.viget.com/articles/host-build-and-deploy-next-js-projects-on-github-pages/
const nextConfig = {
  basePath: prod ? "/trustless-voting" : "",
  assetPrefix: prod ? "https://trustless-democracy.github.io/trustless-voting" : "",
  reactStrictMode: true,
  transpilePackages: ['@zerodevapp/social-wallet','@zerodevapp/wagmi', '@zerodevapp/web3auth', '@web3auth', '@web3auth/modal', '@web3auth/ui'],
}

module.exports = nextConfig
