import React from 'react';

import Home from './views/Home';

import { useAuth0 } from '@auth0/auth0-react';

import Button from 'react-bootstrap/Button';

function App() {
  const {
    loginWithRedirect,
    logout,
    isAuthenticated,
    user,
    isLoading,
  } = useAuth0();

  // TODO: remove this , this is temprary for demo
  const renderContent = () => {
    return (
      <div>
        {isAuthenticated ? (
          <Button onClick={logout}>Logout</Button>
        ) : (
          <Button onClick={loginWithRedirect}>Login</Button>
        )}

        {user ? <div>You are logged in as {user.name}</div> : null}
      </div>
    );
  };

  return <div className="p-3">{isLoading ? <div></div> : renderContent()}</div>;
}

export default App;
