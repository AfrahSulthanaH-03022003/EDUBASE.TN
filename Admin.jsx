import React from 'react';
import './Admin.css';
import {Link} from 'react-router-dom';

const Admin = () => {
  return (
    <div style={{alignItems:"center",marginLeft:"650px"}}>
        <h1 style={{marginTop:"30px"}}>ADMIN PANEL</h1>
        <button className='admin-button'>View student portfolio</button>
        <br></br>
        <br></br>

        <button className='admin-button'>View staff portfolio</button>
        <br></br>
        <br></br>
        <Link to="/update" className='admin-button'>Update events</Link>
        
    </div>
  );
};

export default Admin;
