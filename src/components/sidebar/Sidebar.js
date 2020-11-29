import React from 'react';

import { FcCircuit } from 'react-icons/fc';
import {
  RiTableAltLine,
  RiLayoutMasonryLine,
  RiSettings2Fill,
} from 'react-icons/ri';

import SidebarButton from './Sidebar-button';

import '../../assets/scss/sidebar.scss';

const Sidebar = () => {
  return (
    <div className="sidebar-wrapper">
      <div className="project-title-wrapper">
        <SidebarButton>
          <FcCircuit size="2rem" className="mr-2" />
          <span className="button-text">
            <strong>Jira clone</strong>
            <span>Classic software project</span>
          </span>
        </SidebarButton>
      </div>

      <ul>
        <li>
          <SidebarButton>
            <RiLayoutMasonryLine className="mr-3" />
            <span className="button-text">Dashboard</span>
          </SidebarButton>
        </li>

        <li>
          <SidebarButton>
            <RiTableAltLine className="mr-3" />
            <span className="button-text">Board</span>
          </SidebarButton>
        </li>

        <li>
          <SidebarButton>
            <RiSettings2Fill className="mr-3" />
            <span className="button-text"> Project setting</span>
          </SidebarButton>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
