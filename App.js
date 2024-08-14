// App.jsx
import React from 'react';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import LandingPage from './Landing';
import AttendancePage from './AttendancePage';
import SportsPage from './SportsPage';
import EventsPage from './EventsPage';
import ResultsPage from './ResultsPage';
import Academics from './Academics';
import SignUp from './Registration';
import StudentLogin from './LoginPage';
import TeacherPage from './TeacherPage';
import StudentPortfolio from './StudentPortfolio';
import Admin from './Admin';
import TeacherPortfolio from './TeacherPortfolio';
import UpdateEventsPage from './UpdateEventsPage';
import UpdateTaskPage from './UpdateTaskPage';

const App = () => {
    return (
        <BrowserRouter>
                <Navbar /> 
                <Routes>
                    <Route path="/" element={<LandingPage/>} />
                    <Route path="/academics" element={<Academics/>} />
                    <Route path="/sports" element={<SportsPage/>} />
                    <Route path="/events" element={<EventsPage/>} />
                    <Route path="/results" element={<ResultsPage/>} />
                    <Route path="/login" element={<StudentLogin/>} />
                    <Route path="/register" element={<SignUp />} />
                    <Route path="/TeacherPage" element={<TeacherPage/>}/>
                    <Route path="/attendance" element={<AttendancePage/>}/>
                    <Route path="/StudentPortfolio" element={<StudentPortfolio/>}/>
                    <Route path="/Admin" element={<Admin/>}/>
                    <Route path="/TeacherPortfolio" element={<TeacherPortfolio/>}/>
                    <Route path="/update" element={<UpdateEventsPage/>}/>
                    <Route path="/Task" element={<UpdateTaskPage/>}/>

                </Routes>
                <Footer />
        </BrowserRouter>
    );
};

export default App;
