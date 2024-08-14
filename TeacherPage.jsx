import React from 'react';
import { Link } from 'react-router-dom';
import './TeacherPage.css';

const TeacherPage = () => {
    return (
        <div className="teacher-page-container">
            <h1 className="teacher-page-title">Teacher Dashboard</h1>
            <div className="teacher-button-group">
                <Link to="/StudentPortfolio" className="teacher-button teacher-button--view-students">
                    View Students
                </Link>
                <Link to="/attendance" className="teacher-button teacher-button--attendance">
                    Mark Attendance
                </Link>
                <Link to="/Task" className="teacher-button teacher-button--update-events">
                    Update Tasks
                </Link>
            </div>
        </div>
    );
};

export default TeacherPage;
