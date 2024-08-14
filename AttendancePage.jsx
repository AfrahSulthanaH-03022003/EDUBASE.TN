import React, { useState } from 'react';
import './AttendancePage.css';

const AttendancePage = () => {
    // List of students
    const students = [
        'Student 1', 'Student 2', 'Student 3', 'Student 4', 'Student 5',
        'Student 6', 'Student 7', 'Student 8', 'Student 9', 'Student 10'
    ];

    // State to track attendance
    const [attendance, setAttendance] = useState(
        students.reduce((acc, student) => ({ ...acc, [student]: null }), {})
    );

    const handleCheckboxChange = (student, status) => {
        setAttendance(prevState => ({
            ...prevState,
            [student]: prevState[student] === status ? null : status
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Attendance:', attendance);
        // Handle form submission logic here
    };

    return (
        <div className="attendance-page-container">
            <h1 className="attendance-page-title">Mark Attendance</h1>
            <form className="attendance-form" onSubmit={handleSubmit}>
                <div className="attendance-student-list">
                    {students.map(student => (
                        <div key={student} className="attendance-student-item">
                            <input
                                type="checkbox"
                                id={`${student}-present`}
                                checked={attendance[student] === 'present'}
                                onChange={() => handleCheckboxChange(student, 'present')}
                                className="attendance-checkbox attendance-checkbox-tick"
                            />
                            <label htmlFor={`${student}-present`} className="attendance-student-label">✔</label>
                            
                            <input
                                type="checkbox"
                                id={`${student}-absent`}
                                checked={attendance[student] === 'absent'}
                                onChange={() => handleCheckboxChange(student, 'absent')}
                                className="attendance-checkbox attendance-checkbox-cross"
                            />
                            <label htmlFor={`${student}-absent`} className="attendance-student-label">✘</label>
                            
                            <span className="attendance-student-name">{student}</span>
                        </div>
                    ))}
                </div>
                <button type="submit" className="attendance-submit-button">Submit</button>
            </form>
        </div>
    );
};

export default AttendancePage;
