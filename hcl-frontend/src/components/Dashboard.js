import React from 'react'
import Header from './layout/Header';
import ProjectItem from './project/ProjectItem';

function Dashboard() {
    return (
        <div className='dashboard'>
            <Header/>
            <h1>Welcome to the Dashboard</h1>
            <ProjectItem/>
            <ProjectItem/>
            <ProjectItem/>
            <ProjectItem/>
            <ProjectItem/>
        </div>
    )
}

export default Dashboard;