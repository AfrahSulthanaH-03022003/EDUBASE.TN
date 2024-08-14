import React from 'react';
import './StudentPortfolio.css';

const student = {
  photo: 'https://www.alamy.com/aggregator-api/download?url=https://c8.alamy.com/comp/EC1F8W/1-indian-school-girl-student-EC1F8W.jpg', // Replace with actual photo URL
  name: 'Afiah',
  class: '11th Grade Section C',
  id: '78569',
  phone: '9943697979',
  address: 'St.Josephs',
};

const StudentPortfolio = () => {
  return (
    <div className="student-portfolio">
      <h2 className="portfolio-heading">Student Portfolio</h2>
      <div className="portfolio-container">
        <div className="photo-container">
          <img src={student.photo} alt="Student" className="student-photo" />
        </div>
        <div className="details-container">
          <p><strong>Name:</strong> {student.name}</p>
          <p><strong>Class:</strong> {student.class}</p>
          <p><strong>ID:</strong> {student.id}</p>
          <p><strong>Phone Number:</strong> {student.phone}</p>
          <p><strong>Address:</strong> {student.address}</p>
        </div>
      </div>
    </div>
  );
}

export default StudentPortfolio;
