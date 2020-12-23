import React from 'react';

import BacklogComponent from '../components/BacklogComponent/BacklogComponent';
import { backlogTask } from '../mocks/task';
import '../assets/scss/backlog.scss';

const Backlog = () => {
  return (
    <div>
      <div className="mb-3">
        <BacklogComponent tasks={backlogTask} title="Board" />
      </div>
      <div>
        <BacklogComponent tasks={backlogTask} title="Backlog" />
      </div>
    </div>
  );
};

export default Backlog;
