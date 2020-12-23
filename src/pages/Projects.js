import { useAuth0 } from '@auth0/auth0-react';
import React, { useEffect, useState } from 'react';

import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { MdStar, MdStarBorder, MdMoreHoriz } from 'react-icons/md';

import Navbar from '../components/Navbar/Navbar';
import { getProjects } from '../services/project';
import RoundAvatar from '../components/common/RoundAvatar/RoundAvatar';
import { isArrayEmpty } from '../utils/array';

import '../assets/scss/projectList.scss';

const Projects = () => {
  const [projectsList, setProjectList] = useState([]);
  const { user } = useAuth0();

  useEffect(() => {
    const fetchProjects = async () => {
      const { projects } = await getProjects(user);

      setProjectList(projects);
    };

    fetchProjects();
  }, []);
  return (
    <div className="project-list-page">
      <Navbar></Navbar>
      <section className="project-list-container p-3">
        <section className="header d-flex justify-content-between align-items-center ">
          <div className="header-title">Projects</div>
          <a href="/create-project">
            <Button>Create project</Button>
          </a>
        </section>

        <section className="list mt-4">
          <Table responsive="sm">
            <thead>
              <tr>
                <th>
                  <MdStar />
                </th>
                <th>Name</th>
                <th>Key</th>
                <th>Type</th>
                <th>Lead</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {!isArrayEmpty(projectsList) ? (
                projectsList.map((project) => (
                  <tr key={project.id}>
                    <td>
                      <MdStarBorder />
                    </td>
                    <td>
                      <a href={`project/${project.id}/board`}>{project.name}</a>
                    </td>
                    <td>{project.key}</td>
                    <td>{project.type}</td>
                    <td>
                      <div className="d-flex align-items-center">
                        <div className="mr-2">
                          <RoundAvatar image={project.picture} />
                        </div>
                        <div>
                          {project.given_name} {project.family_name}
                        </div>
                      </div>
                    </td>
                    <td>
                      <MdMoreHoriz />
                    </td>
                  </tr>
                ))
              ) : (
                <div>no projects found</div>
              )}
            </tbody>
          </Table>
        </section>
      </section>
    </div>
  );
};

export default Projects;
