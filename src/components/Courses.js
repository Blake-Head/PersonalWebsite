import React from 'react';
import './Courses.css';

/**
 * Courses Component
 * 
 * This section displays relevant courses, either taken or taught.
 * Each course includes a title, description, and any relevant details.
 */
function Courses() {
  const courses = [
    {
      title: 'Advanced Data Analysis',
      description: 'Comprehensive study of statistical methods and data visualization techniques.',
      type: 'Completed'
    },
    {
      title: 'Research Methodology',
      description: 'Principles and practices of conducting academic research across disciplines.',
      type: 'Taught'
    },
    {
      title: 'Machine Learning Fundamentals',
      description: 'Introduction to supervised and unsupervised learning algorithms.',
      type: 'Completed'
    },
    {
      title: 'Academic Writing',
      description: 'Techniques for effective scholarly communication and publication.',
      type: 'Taught'
    }
  ];

  return (
    <section id="courses" className="section courses-section">
      <div className="container">
        <h2>Courses</h2>
        <div className="courses-list">
          {courses.map((course, index) => (
            <div key={index} className="course-card">
              <div className="course-header">
                <h3>{course.title}</h3>
                <span className="course-type">{course.type}</span>
              </div>
              <p>{course.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Courses;
