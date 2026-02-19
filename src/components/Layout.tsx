import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

const Layout: React.FC = () => {
    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Navbar />
            <main style={{ flex: 1 }}>
                <Outlet />
            </main>
            <footer style={{
                padding: '3rem 0',
                textAlign: 'center',
                borderTop: '1px solid var(--color-border)',
                color: 'var(--color-text-muted)',
                fontSize: '0.875rem'
            }}>
                <div className="container">
                    <p>&copy; {new Date().getFullYear()} Simran Badlani Architects. All rights reserved.</p>
                    <p style={{ marginTop: '0.5rem' }}>Pune, India</p>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
