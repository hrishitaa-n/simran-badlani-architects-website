import { Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
    const iconStyle = {
        color: 'var(--text-navbar)', // warm charcoal / dark taupe
        strokeWidth: 1.5,
        width: '24px',
        height: '24px',
        fill: 'none',
        cursor: 'pointer',
        transition: 'opacity 0.2s ease',
    };

    return (
        <footer
            style={{
                backgroundColor: 'var(--bg-navbar)',
                color: 'var(--text-navbar)',
                padding: '4rem 2rem',
                textAlign: 'center',
                marginTop: 'auto',
                maxWidth: '100%',
            }}
        >
            <div
                style={{
                    maxWidth: '600px',
                    margin: '0 auto',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '2.5rem',
                    alignItems: 'center',
                }}
            >
                {/* Studio Name & Address */}
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.5rem',
                        alignItems: 'center',
                    }}
                >
                    <h3
                        style={{
                            fontSize: '1.25rem',
                            fontWeight: 500,
                            margin: 0,
                            letterSpacing: '0.03em',
                        }}
                    >
                        Simran Badlani Architects & Designers
                    </h3>

                    <div
                        style={{
                            fontSize: '1rem',
                            lineHeight: '1.6',
                            opacity: 0.9,
                            marginTop: '0.5rem',
                        }}
                    >
                        <p style={{ margin: 0 }}>Office No. 232, Akshay Complex</p>
                        <p style={{ margin: 0 }}>
                            Chhatrapati Shahu Maharaj Road, Sangamvadi
                        </p>
                        <p style={{ margin: 0 }}>
                            Pune, Maharashtra 411001, India
                        </p>
                    </div>
                </div>

                {/* Contact Details */}
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.5rem',
                        fontSize: '0.95rem',
                        opacity: 0.9,
                    }}
                >
                    <a
                        href="mailto:sbaoffice23@gmail.com"
                        style={{ color: 'inherit', textDecoration: 'none' }}
                    >
                        sbaoffice23@gmail.com
                    </a>
                    <a
                        href="tel:+918779077544"
                        style={{ color: 'inherit', textDecoration: 'none' }}
                    >
                        +91 87790 77544
                    </a>
                </div>

                {/* Social Icons */}
                <div
                    style={{
                        display: 'flex',
                        gap: '2rem',
                        alignItems: 'center',
                        marginTop: '0.5rem',
                    }}
                >
                    <a
                        href="https://www.instagram.com/simranbadlaniarchitects/?hl=en"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        style={{ display: 'flex', alignItems: 'center', opacity: 0.9 }}
                        onMouseOver={(e) => (e.currentTarget.style.opacity = '1')}
                        onMouseOut={(e) => (e.currentTarget.style.opacity = '0.9')}
                    >
                        <Instagram style={iconStyle} />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/simran-badlani-07487310a/?originalSubdomain=in"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        style={{ display: 'flex', alignItems: 'center', opacity: 0.9 }}
                        onMouseOver={(e) => (e.currentTarget.style.opacity = '1')}
                        onMouseOut={(e) => (e.currentTarget.style.opacity = '0.9')}
                    >
                        <Linkedin style={iconStyle} />
                    </a>
                </div>

                {/* Copyright */}
                <div
                    style={{
                        fontSize: '0.8rem',
                        opacity: 0.6,
                        marginTop: '1rem',
                    }}
                >
                    © {new Date().getFullYear()} Simran Badlani Architects & Designers
                </div>
            </div>
        </footer>
    );
};

export default Footer;
