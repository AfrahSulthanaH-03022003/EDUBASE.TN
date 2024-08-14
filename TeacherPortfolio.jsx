// src/TeacherPortfolio.js
import React, { useState } from 'react';
import './TeacherPortfolio.css';

const teacher = {
  photo: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', // Replace with actual photo URL
  name: 'Jane Smith',
  id: '67890',
  subjects: ['Mathematics', 'Physics'],
  experience: 15,
  emailId:'janesmith@amypo.in',
};

const TeacherPortfolio = () => {
  const [studentName, setStudentName] = useState('');
  const [studentStandard, setStudentStandard] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Student Name: ${studentName}`);
    console.log(`Student Standard: ${studentStandard}`);
    alert(`Connected with ${teacher.name}`);
  };

  return (
    <div className="sss">
    <div className="teacher-portfolio">
    <div className="portfolio-container">
      <div className="photo-container">
        <img src={teacher.photo} alt="Teacher" className="teacher-photo" />
      </div>
      <div className="details-container">
        <p><strong>Name:</strong> {teacher.name}</p>
        <p><strong>ID:</strong> {teacher.id}</p>
        <p><strong>Subjects:</strong> {teacher.subjects.join(', ')}</p>
        <p><strong>Years of Teaching Experience:</strong> {teacher.experience}</p>
        <p><strong>Email Id:</strong> {teacher.emailId}</p>

      </div>
      <div className="form-container">
        <h2>Connect with {teacher.name}</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              Student Name:
              <input
                type="text"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                required
              />
            </label>
          </div>
          <div>
            <label>
              Standard:
              <input
                type="text"
                value={studentStandard}
                onChange={(e) => setStudentStandard(e.target.value)}
                required
              />
            </label>
          </div>
          <button type="submit">Connect</button>
        </form>
      </div>
    </div>
    </div>
    </div>
  );
}

export default TeacherPortfolio;
