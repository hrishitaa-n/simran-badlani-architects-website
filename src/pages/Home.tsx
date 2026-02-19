

const Home = () => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                // Removed minHeight to allow natural flow
            }}
        >
            {/* Content Wrapper */}
            <div
                style={{
                    maxWidth: '1200px',
                    margin: '0 auto',
                    padding: '6rem 2rem',
                    // Removed minHeight and flex centering
                }}
            >


                {/* Logo */}
                <div
                    style={{
                        marginBottom: '2.5rem',
                        textAlign: 'center',
                    }}
                >
                    <img
                        src="/logo.png"
                        alt="Simran Badlani Architects Logo"
                        style={{
                            height: '140px',
                            width: 'auto',
                            objectFit: 'contain',
                        }}
                    />
                </div>

                {/* Subtitle */}
                <h2
                    style={{
                        fontSize: '1.5rem',
                        fontWeight: 400,
                        color: 'var(--text-accent)',
                        marginBottom: '4rem',
                        textAlign: 'center',
                    }}
                >
                    Pune-based Architecture & Interior Design Studio
                </h2>

                {/* Intro Text */}
                <div
                    style={{
                        maxWidth: '700px',
                        margin: '0 auto',
                        textAlign: 'center',
                    }}
                >
                    <p
                        style={{
                            fontSize: '1.2rem',
                            lineHeight: '1.6',
                            color: 'var(--text-muted)',
                            margin: 0,
                        }}
                    >
                        We create spaces that blend functionality with modern aesthetics.
                        Our designs are rooted in a deep understanding of context, material,
                        and human experience.
                    </p>
                </div>

            </div>


        </div>
    );
};

export default Home;
