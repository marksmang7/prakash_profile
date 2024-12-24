import React from 'react';

const Projects = () => {
  const projects = [
    { title: "Smart-Data-Validator", description: "A cross platform Big Data validation tool desined to validate the data between two different systems (Database or File System). It supports wide range of external connectors." },
    { title: "E-Compare", description: "A data validation pipeline designed to validate the data between parquet file and delta table using Azure Data Factory, Databricks, ADLS" },
  ];

  return (
<section id="projects" className="py-16 bg-black text-white">
  <div className="max-w-7xl mx-auto px-4">
    <h2 className="text-3xl font-bold text-center text-purple mb-8">Projects</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {projects.map((project, index) => (
        <div
          key={index}
          className="p-6 bg-gradient-to-br from-gray-800 to-gray-900 text-gray-300 rounded-lg shadow-lg hover:shadow-xl transition"
        >
          <h3 className="text-xl font-semibold text-purple">{project.title}</h3>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>

  );
};

export default Projects;
