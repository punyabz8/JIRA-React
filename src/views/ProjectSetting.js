import React from 'react';
import ProjectMembers from './ProjectMembers';

const ProjectSetting = (props) => {
  return (
    <div>This is the project setting page
      <ProjectMembers {...props}/>
    </div>
  );
};

export default ProjectSetting;
