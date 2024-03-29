import React from 'react'
import { Outlet } from 'react-router'
import Navbar from './components/Navbar'

const App = () => {
    return (
        <>
            <Navbar />    
            <div className="container">
                <Outlet />
            </div>
        </>
    )
}

export default App
