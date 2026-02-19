const Contact = () => {
    return (
        <>
            <style>
                {`
                    .contact-wrapper {
                        max-width: 1200px;
                        margin: 0 auto;
                        padding: 2rem;
                    }

                    .contact-card {
                        background-color: var(--bg-main); /* Or keeping it clean transparent if container handles it, prompt asked for "single soft container" */
                        border-radius: 20px;
                        overflow: hidden;
                        display: flex;
                        flex-direction: column; /* Mobile first: stack */
                    }
                    
                    .contact-heading-group {
                        text-align: center;
                        margin: 0 auto 3rem auto;
                        max-width: 800px;
                    }

                    .contact-title {
                        font-size: 2.4rem;
                        font-weight: 400;
                        color: var(--text-main);
                        margin-bottom: 0.75rem;
                        line-height: 1.2;
                    }

                    .contact-subtitle {
                        font-size: 1.05rem;
                        color: var(--text-muted);
                        margin: 0;
                        line-height: 1.6;
                        font-weight: 400;
                    }

                    /* Desktop Styles */
                    @media (min-width: 900px) {
                        .contact-card {
                            flex-direction: row;
                            align-items: flex-start;
                            padding: 3rem;
                            gap: 4rem;
                            background-color: var(--bg-second); 
                        }
                        
                        .map-column {
                            flex: 1;
                            min-width: 0; 
                            height: 480px;
                        }
                        
                        .info-column {
                            flex: 0 0 400px;
                        }
                    }

                    /* Mobile/Tablet Styles */
                    @media (max-width: 899px) {
                        .contact-wrapper {
                            padding: 1rem;
                        }

                        .contact-heading-group {
                            margin-bottom: 2rem;
                            padding: 0 1rem;
                        }

                        .contact-title {
                            font-size: 1.75rem;
                        }

                        .contact-subtitle {
                            font-size: 0.95rem;
                        }

                        .contact-card {
                            background-color: transparent;
                            gap: 2rem;
                        }

                        .map-column {
                            width: 100%;
                            height: 320px;
                            border-radius: 12px;
                            overflow: hidden;
                            background-color: var(--bg-second);
                        }

                        .info-column {
                            width: 100%;
                            padding: 0 0.5rem;
                        }
                    }
                `}
            </style>

            <div className="contact-wrapper">
                <div className="contact-heading-group">
                    <h1 className="contact-title">
                        Design Starts With a Conversation
                    </h1>
                    <p className="contact-subtitle">
                        Contact us to begin your design journey.
                    </p>
                </div>

                <div className="contact-card">
                    {/* Left Column - Map */}
                    <div className="map-column">
                        <div style={{ width: '100%', height: '100%', borderRadius: 'inherit', overflow: 'hidden' }}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.8342941416267!2d73.87282757582877!3d18.536388868689574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c0f724c231bb%3A0x6a7dbd73de348d53!2s232%2C%20Akshay%20Complex%20Rd%2C%20Sangamvadi%2C%20Pune%2C%20Maharashtra%20411001!5e0!3m2!1sen!2sin!4v1769953747360!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Studio Location"
                            />
                        </div>
                    </div>

                    {/* Right Column - Details */}
                    <div className="info-column">
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                            <div>
                                <h2 style={{ fontSize: '1.75rem', fontWeight: '400', margin: '0 0 1rem 0', color: 'var(--text-main)', letterSpacing: '-0.02em', lineHeight: '1.2' }}>
                                    Simran Badlani Architects
                                </h2>
                                <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', fontSize: '1.05rem' }}>
                                    Office No. 232, Akshay Complex<br />
                                    Chhatrapati Shahu Maharaj Road, Sangamvadi<br />
                                    Pune, Maharashtra 411001, India
                                </p>
                            </div>

                            <div>
                                <h3 style={{ fontSize: '0.85rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-accent)', marginBottom: '0.75rem' }}>
                                    Get in Touch
                                </h3>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    <a href="tel:+918779077544" style={{ color: 'var(--text-main)', fontSize: '1.1rem', textDecoration: 'none', transition: 'opacity 0.2s' }}>
                                        +91 87790 77544
                                    </a>
                                    <a href="mailto:sbaoffice23@gmail.com" style={{ color: 'var(--text-main)', fontSize: '1.1rem', textDecoration: 'none', transition: 'opacity 0.2s' }}>
                                        sbaoffice23@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div>
                                <h3 style={{ fontSize: '0.85rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-accent)', marginBottom: '1rem' }}>
                                    Social
                                </h3>
                                <div style={{ display: 'flex', gap: '2rem' }}>
                                    <a
                                        href="https://www.instagram.com/simranbadlaniarchitects/?hl=en"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ fontSize: '1rem', fontWeight: '500', color: 'var(--text-main)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                                    >
                                        Instagram <span style={{ fontSize: '1.2em' }}>↗</span>
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/in/simran-badlani-07487310a/?originalSubdomain=in"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ fontSize: '1rem', fontWeight: '500', color: 'var(--text-main)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                                    >
                                        LinkedIn <span style={{ fontSize: '1.2em' }}>↗</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
