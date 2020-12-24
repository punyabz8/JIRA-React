import React from 'react';
import PropTypes, { string } from 'prop-types';

import '../../assets/scss/list.scss';

const ListView = (props) => {
  return (
    <div className="list-view" id={props.id}>
      <ul>
        <li>This is first list</li>
      </ul>
    </div>
  );
};

ListView.propTypes = {
  id: string,
};

export default ListView;
