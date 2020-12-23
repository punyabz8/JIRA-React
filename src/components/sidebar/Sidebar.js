import React from 'react';

import { FcCircuit } from 'react-icons/fc';
import { useRouteMatch } from 'react-router-dom';
import { RiTableAltLine, RiSettings2Fill } from 'react-icons/ri';
import { MdInsertChart } from 'react-icons/md';

import SidebarButton from './Sidebar-button';

import '../../assets/scss/sidebar.scss';

const Sidebar = () => {
  const { url } = useRouteMatch();

  return (
    <div className="sidebar-wrapper">
      <div className="project-title-wrapper">
        <FcCircuit size="2rem" className="mr-2" />
        <span className="button-text">
          <strong>Jira clone</strong>
          <span>Classic software project</span>
        </span>
      </div>

      <ul>
        {/* <li>
          <SidebarButton path={`${url}/dashboard`}>
            <RiLayoutMasonryLine className="mr-3" />
            <span className="button-text">Dashboard</span>
          </SidebarButton>
        </li> */}

        <li>
          <SidebarButton path={`${url}/dashboard`}>
            <RiTableAltLine className="mr-3" />
            <span className="button-text">Board</span>
          </SidebarButton>
        </li>

        <li>
          <SidebarButton path={`${url}/backlog`}>
            <RiTableAltLine className="mr-3" />
            <span className="button-text">Backlog</span>
          </SidebarButton>
        </li>

        <li>
          <SidebarButton path={`${url}/setting`}>
            <RiSettings2Fill className="mr-3" />
            <span className="button-text"> Project setting</span>
          </SidebarButton>
        </li>

        <li>
          <SidebarButton path={`${url}/chart`}>
            <MdInsertChart className="mr-3" />
            <span className="button-text"> Chart</span>
          </SidebarButton>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
