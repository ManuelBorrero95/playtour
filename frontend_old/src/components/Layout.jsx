import React from 'react';
import Navbar from "./Navbar";

const Layout = ({ children }) => {
    return (

        <div>
            <Navbar></Navbar>

            <main style={{ padding: '1rem' }}>
                {children}
            </main>
        </div>

    );

}

export default Layout; 