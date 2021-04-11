import { useAuth0 } from '@auth0/auth0-react'

const IndexPage = () => {
  const { user, isLoading, logout, loginWithRedirect, isAuthenticated } = useAuth0()

  if (isLoading) return 'Loading...'

  return (
    <div>
      {isAuthenticated ? (
        <div>
          Hello {user.name}{' '}
          <button onClick={() => logout({ returnTo: window.location.origin })}>Log Out</button>
        </div>
      ) : (
        <button onClick={() => loginWithRedirect()}>Log In</button>
      )}
    </div>
  )
}

export default IndexPage
