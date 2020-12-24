import { useAuth0 } from '@auth0/auth0-react';
import React, { useEffect, useState } from 'react';
import { Redirect, useRouteMatch } from 'react-router-dom';

import { getBoards } from '../services/board';

const RedirectToBoards = () => {
  const { url } = useRouteMatch();
  const { user } = useAuth0();
  const [redirect, setRedirect] = useState(false);
  const [boardId, setBoardId] = useState(null);

  useEffect(() => {
    const urlArr = url.split('/');
    const fetchBoards = async () => {
      const boards = await getBoards(urlArr[2], user);

      setBoardId(boards.boards[0].id);
      setRedirect(true);
    };

    fetchBoards();
  }, []);

  return (
    <div>
      {redirect ? <Redirect to={`${url}/${boardId}/dashboard`} /> : null}
    </div>
  );
};

export default RedirectToBoards;
