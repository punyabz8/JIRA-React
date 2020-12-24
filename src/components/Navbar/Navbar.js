import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Button from 'react-bootstrap/Button';

import RoundAvatar from '../common/RoundAvatar/RoundAvatar';
import CreateIssue from '../Issue/CreateIssue';

import '../../assets/scss/navbar.scss';
import image from '../../assets/images/jira.png';
import ProjectMembers from '../../views/ProjectMembers';

const Navbar = () => {
  const { user, logout } = useAuth0();
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [projectMembers, setShowProjectMember] = useState(false);

  return (
    <>
      <div className="navbar-container">
        <section>
          <ul>
            <li>
              <div className="logo-wrapper">
                <img src={image} alt="logo"></img>
              </div>
            </li>
            <li>
              <a href="/projects">Projects</a>
            </li>

            <li>
              <span
                role="button"
                onClick={() => {
                  setShowProjectMember(true);
                }}
              >
                People
              </span>
            </li>
            <li>
              <Button onClick={() => setShowCreateModal(true)}>Create</Button>
            </li>
          </ul>
        </section>

        <section className="d-flex">
          <Button variant="light" onClick={logout}>
            logout
          </Button>
          <ul>
            {user ? (
              <li>
                <RoundAvatar image={user.picture}></RoundAvatar>
              </li>
            ) : null}
          </ul>
        </section>
      </div>
      <CreateIssue
        onHide={() => setShowCreateModal(false)}
        show={showCreateModal}
      />

      <ProjectMembers
        show={projectMembers}
        onHide={() => setShowProjectMember(false)}
      />
    </>
  );
};

export default Navbar;
