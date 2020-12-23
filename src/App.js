import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import Routers from './Routers';
import { setAccessToken } from './helper/storage';
import { syncBackendUser } from './services/user';

function App() {
  const { getAccessTokenSilently, isAuthenticated, user } = useAuth0();

  useEffect(() => {
    async function getAccessToken() {
      if (isAuthenticated) {
        syncBackendUser(user);
        const token = await getAccessTokenSilently();

        setAccessToken(token);
      }
    }

    getAccessToken();
  }, [isAuthenticated, getAccessTokenSilently]);
  return (
    <Router>
      <Switch>
        <Routers />
      </Switch>
    </Router>
  );
}

export default App;
