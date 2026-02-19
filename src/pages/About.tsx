const About = () => {
    return (
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '6rem 2rem' }}>

            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '4rem',
                alignItems: 'flex-start' // Ensure top alignment
            }}>
                {/* Image Section - Left on Desktop, Top on Mobile */}
                <div style={{
                    flex: '1 1 400px',
                    maxWidth: '100%'
                }}>
                    <img
                        src="/about.jpg"
                        alt="Interior architectural detail"
                        style={{
                            width: '100%',
                            height: 'auto',
                            display: 'block',
                            objectFit: 'cover',
                            maxHeight: '80vh'
                        }}
                    />
                </div>

                {/* Text Section - Right on Desktop, Bottom on Mobile */}
                <div style={{
                    flex: '1 1 450px',
                    maxWidth: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '2rem'
                }}>
                    <h1 style={{
                        fontSize: '2.5rem',
                        fontWeight: '300',
                        color: 'var(--text-main)',
                        letterSpacing: '-0.01em',
                        margin: 0,
                        marginBottom: '1rem',
                        lineHeight: '1',
                        marginTop: '-6px' // Optical alignment with image top
                    }}>Studio</h1>

                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1.5rem',
                        fontSize: '1.15rem',
                        lineHeight: '1.7',
                        color: 'var(--text-muted)'
                    }}>
                        <p style={{ margin: 0 }}>
                            Simran Badlani Architects is a design-led architecture and interior design firm in India, working across private residences, public architecture, and institutional buildings. Our practice is grounded in clarity, proportion, and purpose, with a strong belief that architecture must respond to people, context, and long-term use.
                        </p>

                        <p style={{ margin: 0 }}>
                            We specialise in public architecture and judicial infrastructure, with extensive experience in the planning and design of court buildings, district courts, high courts, and government buildings. These projects require a careful balance of functionality, security, accessibility, and civic dignity — an approach we achieve through efficient space planning, clear circulation, and context-sensitive design.
                        </p>

                        <p style={{ margin: 0 }}>
                            Our work spans architectural design, interior design, master planning, and project coordination, characterised by clean lines, honest materials, and a restrained, timeless aesthetic. Light, scale, and spatial flow play a central role in shaping environments that are both efficient and humane.
                        </p>

                        <p style={{ margin: 0 }}>
                            Detail-driven and collaborative, we work closely with private clients, government authorities, and public institutions to deliver architecture that is enduring, sustainable, and well-resolved. At Simran Badlani Architects, we create thoughtfully designed spaces that perform with purpose and are experienced with clarity.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
