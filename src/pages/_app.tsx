import { Auth0Provider } from '@auth0/auth0-react'

const App = ({ Component, pageProps }) => (
  <Auth0Provider
    domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN}
    clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID}
    redirectUri={typeof window !== 'undefined' && window.location.origin}
    useRefreshTokens
    // To make it work on Brave, Safari, privacy browsers that block third-party cookies
    cacheLocation="localstorage"
  >
    <Component {...pageProps} />
  </Auth0Provider>
)

export default App
