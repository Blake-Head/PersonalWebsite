import React from 'react';
import './Research.css';

/**
 * Research Component
 * 
 * This section showcases research interests and current projects.
 * It highlights ongoing work and areas of academic focus.
 */
function Research() {
  const researchAreas = [
    {
      title: 'Computational Methods',
      description: 'Exploring novel computational approaches to solve complex problems in data science and analysis.',
      status: 'Ongoing'
    },
    {
      title: 'Educational Technology',
      description: 'Investigating the impact of technology on learning outcomes and pedagogical practices.',
      status: 'Active'
    },
    {
      title: 'Statistical Modeling',
      description: 'Developing advanced statistical models for predictive analytics and decision-making.',
      status: 'Ongoing'
    }
  ];

  return (
    <section id="research" className="section research-section">
      <div className="container">
        <h2>Research Interests</h2>
        <p className="research-intro">
          My research focuses on the intersection of technology, data science, and education.
        </p>
        <div className="research-list">
          {researchAreas.map((area, index) => (
            <div key={index} className="research-card">
              <div className="research-header">
                <h3>{area.title}</h3>
                <span className="research-status">{area.status}</span>
              </div>
              <p>{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Research;
