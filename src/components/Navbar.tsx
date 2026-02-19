import { Link } from 'react-router-dom';

const Navbar = () => {
    const linkStyle = {
        textDecoration: 'none',
        color: 'var(--text-navbar)',
        fontSize: '0.9rem',
        fontWeight: '500'
    };

    return (
        <>
            <style>
                {`
                    @media (max-width: 768px) {
                        .navbar-container {
                            flex-wrap: wrap;
                            justify-content: center !important;
                            gap: 1.5rem;
                        }
                        .navbar-links {
                            justify-content: center;
                            width: 100%;
                            flex-wrap: wrap;
                            gap: 1.5rem !important;
                        }
                    }
                `}
            </style>
            <nav
                className="navbar-container"
                style={{
                    padding: '1.5rem 2rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    backgroundColor: 'var(--bg-navbar)',
                    maxWidth: '100%'
                }}
            >
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
                        <img src="/logo.png" alt="Simran Badlani Architects" style={{ height: '60px', width: 'auto', objectFit: 'contain' }} />
                    </Link>
                </div>
                <div
                    className="navbar-links"
                    style={{ display: 'flex', gap: '2rem' }}
                >
                    <Link to="/" style={linkStyle}>Home</Link>
                    <Link to="/projects" style={linkStyle}>Projects</Link>
                    <Link to="/about" style={linkStyle}>About</Link>
                    <Link to="/contact" style={linkStyle}>Contact</Link>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
