const addProject = async (data, token) => {
  try {
    const response = await fetch('http://localhost:4000/v1/projects', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: 'POST',
      body: JSON.stringify(data),
    });

    return response;
  } catch (ex) {
    return {
      error: ex.message,
    };
  }
};

export default addProject;
