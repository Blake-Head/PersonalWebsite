import React from 'react';
import './Skills.css';

/**
 * Skills Component
 * 
 * This section displays professional skills and competencies.
 * Skills are organized in a grid layout with categories.
 */
function Skills() {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['Python', 'JavaScript', 'R', 'Java']
    },
    {
      title: 'Research Methods',
      skills: ['Data Analysis', 'Statistical Modeling', 'Experimental Design', 'Literature Review']
    },
    {
      title: 'Tools & Technologies',
      skills: ['Git', 'LaTeX', 'SPSS', 'React']
    },
    {
      title: 'Soft Skills',
      skills: ['Teaching', 'Public Speaking', 'Technical Writing', 'Collaboration']
    }
  ];

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <h2>Skills</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3>{category.title}</h3>
              <ul>
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
