import React, { useEffect, useState } from 'react';

import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { MdStar, MdStarBorder, MdMoreHoriz } from 'react-icons/md';

import Navbar from '../components/Navbar/Navbar';
import { getProjects } from '../services/project';

import '../assets/scss/projectList.scss';

const Projects = () => {
  const [projectsList, setProjectList] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const { projects } = await getProjects();

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
              {projectsList.map((project) => (
                <tr key={project.id}>
                  <td>
                    <MdStarBorder />
                  </td>
                  <td>
                    <a href={`project/${project.id}`}>{project.name}</a>
                  </td>
                  <td>{project.key}</td>
                  <td>{project.type}</td>
                  <td>{project.lead_id}</td>
                  <td>
                    <MdMoreHoriz />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </section>
      </section>
    </div>
  );
};

export default Projects;
