import { Auth0Provider } from '@auth0/auth0-react'

const App = ({ Component, pageProps }) => (
  <Auth0Provider
    domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN}
    clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID}
    redirectUri={process.env.NEXT_PUBLIC_HOME_URI}
    useRefreshTokens
  >
    <Component {...pageProps} />
  </Auth0Provider>
)

export default App
