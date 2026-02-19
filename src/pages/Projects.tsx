import { useState, useEffect } from 'react';

interface MediaItem {
    type: 'image' | 'video';
    src: string;
}

interface Project {
    id: number;
    title: string;
    location: string;
    year: string;
    typology: string;
    mediaType: 'image' | 'video';
    hero: MediaItem;
    description: string;
    details: {
        program: string;
        area: string;
        client: string;
        status: string;
    };
    gallery: MediaItem[];
}

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [viewMode, setViewMode] = useState<'info' | 'gallery'>('info');

    // Prevent background scrolling when overlay is open
    useEffect(() => {
        if (selectedProject) {
            document.body.style.overflow = 'hidden';
            setViewMode('info'); // Reset to info view on open
        } else {
            document.body.style.overflow = 'unset';
            document.body.style.paddingRight = '0px';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [selectedProject]);

    const projects: Project[] = [
        {
            id: 1,
            title: "Additional District Court",
            location: "Khed Taluka, Pune",
            year: "2022-2025",
            typology: "Public / Judicial",
            mediaType: 'image',
            hero: { type: 'image', src: "/projects/project-1/hero-1.jpg" },
            description: `A contemporary district court designed to balance dignity with approachability, creating a humane and calming civic environment. The project prioritises user comfort, well-being, universal accessibility, and clear security zoning for litigants, lawyers, and staff. Landscaped courtyards, open public spaces, and naturally lit, well-ventilated waiting areas introduce moments of relief within a high-stress judicial setting`,
            details: {
                program: "Judicial Complex",
                area: "6040.65 sq.m",
                client: "PWD, Government of Maharashtra",
                status: "Completed"
            },
            gallery: [
                { type: 'image', src: "/projects/project-1/gallery-1.jpeg" },
                { type: 'image', src: "/projects/project-1/gallery-2.jpg" },
                { type: 'image', src: "/projects/project-1/gallery-3.jpg" },
                { type: 'image', src: "/projects/project-1/gallery-4.jpg" },
                { type: 'image', src: "/projects/project-1/gallery-5.jpg" },
                { type: 'image', src: "/projects/project-1/gallery-6.png" },
                { type: 'image', src: "/projects/project-1/gallery-7.jpg" },
                { type: 'image', src: "/projects/project-1/gallery-8.jpg" },
                { type: 'image', src: "/projects/project-1/gallery-9.jpg" },
                { type: 'image', src: "/projects/project-1/gallery-10.jpg" }
            ]
        },
        {
            id: 2,
            title: "Sample Project Two",
            location: "Location Placeholder",
            year: "2024",
            typology: "Residential",
            mediaType: 'image',
            hero: { type: 'image', src: "/projects/project-2/hero-2.png" },
            description: `This is a placeholder description for the second project. It serves to demonstrate the layout and functionality of the project popup and gallery. The design maintains the same aesthetic and structure as the first project, offering a seamless user experience across the portfolio.`,
            details: {
                program: "Residential",
                area: "300 sq.m",
                client: "Private",
                status: "Concept"
            },
            gallery: [
                { type: 'image', src: "/projects/project-2/gallery-1.png" },
                { type: 'image', src: "/projects/project-2/gallery-2.png" },
                { type: 'image', src: "/projects/project-2/gallery-3.png" },
                { type: 'image', src: "/projects/project-2/gallery-4.png" }
            ]
        },
        {
            id: 3,
            title: "Sample Project Three",
            location: "Location Placeholder",
            year: "2024",
            typology: "Residential",
            mediaType: 'video',
            hero: { type: 'video', src: "/projects/project-3/hero-video.mp4" },
            description: `This project features a video as the hero media. It demonstrates the capability to support video content in both the project card preview and the detailed popup view, providing a dynamic and engaging user experience.`,
            details: {
                program: "Residential",
                area: "450 sq.m",
                client: "Private",
                status: "In Progress"
            },
            gallery: [
                { type: 'video', src: "/projects/project-3/hero-video.mp4" },
                { type: 'video', src: "/projects/project-3/gallery-video-1.mp4" },
                { type: 'image', src: "/projects/project-3/gallery-1.jpeg" },
                { type: 'image', src: "/projects/project-3/gallery-2.jpeg" },
                { type: 'image', src: "/projects/project-3/gallery-3.jpeg" },
                { type: 'image', src: "/projects/project-3/gallery-4.jpeg" },
                { type: 'image', src: "/projects/project-3/gallery-5.jpeg" },
                { type: 'image', src: "/projects/project-3/gallery-6.jpeg" }
            ]
        },
        {
            id: 4,
            title: "Project Title Here",
            location: "Location Here",
            year: "2023–2024",
            typology: "Residential / Public",
            mediaType: 'image',
            hero: { type: 'image', src: "/projects/project-4/hero-4.jpeg" },
            description: `This is a description for Project 4. It uses a hero image and a gallery of images.`,
            details: {
                program: "Program Name",
                area: "XXXX sq.m",
                client: "Client Name",
                status: "Completed"
            },
            gallery: [
                { type: 'image', src: "/projects/project-4/hero-4.jpeg" },
                { type: 'image', src: "/projects/project-4/gallery-1.jpeg" },
                { type: 'image', src: "/projects/project-4/gallery-2.jpeg" },
                { type: 'image', src: "/projects/project-4/gallery-3.jpeg" }
            ]
        }
    ];

    return (
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 2rem' }}>
            <h1 style={{
                fontSize: '2.5rem',
                fontWeight: '300',
                marginBottom: '4rem',
                color: 'var(--text-main)',
                letterSpacing: '-0.02em'
            }}>Selected Projects</h1>

            {/* Project List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '5rem' }}>
                {projects.map((project) => (
                    <div
                        key={project.id}
                        onClick={() => setSelectedProject(project)}
                        style={{ cursor: 'pointer', maxWidth: '900px' }}
                    >
                        <div style={{
                            width: '100%',
                            aspectRatio: '16/9',
                            marginBottom: '1.5rem',
                            backgroundColor: '#e5e5e5',
                            overflow: 'hidden'
                        }}>
                            {project.mediaType === 'video' ? (
                                <video
                                    src={project.hero.src}
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                                />
                            ) : (
                                <img
                                    src={project.hero.src}
                                    alt={project.title}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                                />
                            )}
                        </div>
                        <h2 style={{
                            fontSize: '1.5rem',
                            fontWeight: '400',
                            margin: '0 0 0.5rem 0',
                            color: 'var(--text-main)'
                        }}>
                            {project.title}
                        </h2>
                        <p style={{
                            fontSize: '0.9rem',
                            color: 'var(--text-muted)',
                            margin: 0,
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em'
                        }}>
                            {project.location} — {project.year}
                        </p>
                    </div>
                ))}
            </div>

            {/* Project Popup Dialog */}
            {selectedProject && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '100vh',
                    backgroundColor: 'rgba(255, 255, 255, 0.92)', // Dimmed white backdrop
                    zIndex: 2000,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '2rem' // Padding around the popup
                }}>
                    {/* Dialog Box */}
                    <div style={{
                        position: 'relative',
                        width: '100%',
                        maxWidth: '1000px',
                        height: '90vh', // Max height of the popup
                        backgroundColor: '#fff',
                        boxShadow: '0 20px 50px rgba(0,0,0,0.1)',
                        display: 'flex',
                        flexDirection: 'column',
                        overflow: 'hidden', // Internal scrolling
                        borderRadius: '20px'
                    }}>

                        {/* Header Section (Fixed at top of popup) */}
                        <div style={{
                            padding: '2rem 3rem',
                            borderBottom: '1px solid #f0f0f0',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'flex-start',
                            flexShrink: 0
                        }}>
                            <div>
                                <h1 style={{
                                    fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                                    fontWeight: '300',
                                    margin: '0 0 0.5rem 0',
                                    color: '#1a1a1a',
                                    lineHeight: 1.1
                                }}>
                                    {selectedProject.title}
                                </h1>
                                <p style={{
                                    margin: 0,
                                    fontSize: '0.9rem',
                                    color: '#666',
                                    fontFamily: 'inherit'
                                }}>
                                    {selectedProject.location} | {selectedProject.year} | {selectedProject.typology}
                                </p>
                            </div>

                            <button
                                onClick={() => setSelectedProject(null)}
                                style={{
                                    background: 'none',
                                    border: 'none',
                                    fontSize: '2rem',
                                    lineHeight: '1',
                                    color: '#999',
                                    cursor: 'pointer',
                                    padding: '0 0 0 1rem',
                                    marginLeft: '1rem'
                                }}
                                aria-label="Close"
                            >
                                ×
                            </button>
                        </div>

                        {/* Navigation Toggles */}
                        <div style={{
                            padding: '1rem 3rem 0',
                            display: 'flex',
                            gap: '2rem',
                            flexShrink: 0,
                            borderBottom: '1px solid transparent' // Placeholder
                        }}>
                            <button
                                onClick={() => setViewMode('info')}
                                style={{
                                    background: 'none',
                                    border: 'none',
                                    padding: '0 0 0.5rem 0',
                                    fontSize: '0.9rem',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.05em',
                                    cursor: 'pointer',
                                    color: viewMode === 'info' ? '#1a1a1a' : '#999',
                                    borderBottom: viewMode === 'info' ? '1px solid #1a1a1a' : '1px solid transparent',
                                    transition: 'none'
                                }}
                            >
                                Project Info
                            </button>
                            <button
                                onClick={() => setViewMode('gallery')}
                                style={{
                                    background: 'none',
                                    border: 'none',
                                    padding: '0 0 0.5rem 0',
                                    fontSize: '0.9rem',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.05em',
                                    cursor: 'pointer',
                                    color: viewMode === 'gallery' ? '#1a1a1a' : '#999',
                                    borderBottom: viewMode === 'gallery' ? '1px solid #1a1a1a' : '1px solid transparent',
                                    transition: 'none'
                                }}
                            >
                                Gallery
                            </button>
                        </div>

                        {/* Scrollable Content Area */}
                        <div style={{
                            flex: 1,
                            overflowY: 'auto',
                            padding: '2rem 3rem 4rem',
                            scrollBehavior: 'smooth'
                        }}>
                            {/* INFO VIEW */}
                            {viewMode === 'info' && (
                                <div style={{ maxWidth: '800px' }}>
                                    <div style={{ marginBottom: '3rem', width: 'calc(100% + 6rem)', marginLeft: '-3rem' }}>
                                        {selectedProject.hero.type === 'video' ? (
                                            <video
                                                src={selectedProject.hero.src}
                                                autoPlay
                                                muted
                                                loop
                                                playsInline
                                                style={{
                                                    width: '100%',
                                                    height: 'auto',
                                                    display: 'block',
                                                    maxHeight: '60vh',
                                                    objectFit: 'cover'
                                                }}
                                            />
                                        ) : (
                                            <img
                                                src={selectedProject.hero.src}
                                                alt={selectedProject.title}
                                                style={{
                                                    width: '100%',
                                                    height: 'auto',
                                                    display: 'block',
                                                    maxHeight: '60vh',
                                                    objectFit: 'cover'
                                                }}
                                            />
                                        )}
                                    </div>

                                    <div style={{
                                        display: 'grid',
                                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                                        gap: '4rem'
                                    }}>
                                        {/* Description */}
                                        <div style={{
                                            fontSize: '1.1rem',
                                            lineHeight: '1.7',
                                            color: '#333',
                                            fontWeight: '300'
                                        }}>
                                            {selectedProject.description.split('\n\n').map((paragraph, idx) => (
                                                <p key={idx} style={{ marginBottom: '1.5rem', marginTop: 0 }}>{paragraph}</p>
                                            ))}
                                        </div>

                                        {/* Details */}
                                        <div style={{ fontSize: '0.95rem' }}>
                                            <div style={{ marginBottom: '1.5rem' }}>
                                                <h4 style={{ margin: '0 0 0.3rem 0', color: '#888', fontWeight: '400', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Program</h4>
                                                <p style={{ margin: 0 }}>{selectedProject.details.program}</p>
                                            </div>
                                            <div style={{ marginBottom: '1.5rem' }}>
                                                <h4 style={{ margin: '0 0 0.3rem 0', color: '#888', fontWeight: '400', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Size</h4>
                                                <p style={{ margin: 0 }}>{selectedProject.details.area}</p>
                                            </div>
                                            <div style={{ marginBottom: '1.5rem' }}>
                                                <h4 style={{ margin: '0 0 0.3rem 0', color: '#888', fontWeight: '400', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Client</h4>
                                                <p style={{ margin: 0 }}>{selectedProject.details.client}</p>
                                            </div>
                                            <div style={{ marginBottom: '1.5rem' }}>
                                                <h4 style={{ margin: '0 0 0.3rem 0', color: '#888', fontWeight: '400', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Status</h4>
                                                <p style={{ margin: 0 }}>{selectedProject.details.status}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* GALLERY VIEW */}
                            {viewMode === 'gallery' && (
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                                    {selectedProject.gallery.map((item, i) => (
                                        <div key={i} style={{ width: 'calc(100% + 6rem)', marginLeft: '-3rem' }}>
                                            {item.type === 'video' ? (
                                                <video
                                                    src={item.src}
                                                    autoPlay
                                                    muted
                                                    loop
                                                    playsInline
                                                    style={{
                                                        width: '100%',
                                                        height: 'auto',
                                                        display: 'block'
                                                    }}
                                                />
                                            ) : (
                                                <img
                                                    src={item.src}
                                                    alt={`Gallery view ${i + 1}`}
                                                    style={{
                                                        width: '100%',
                                                        height: 'auto',
                                                        display: 'block'
                                                    }}
                                                />
                                            )}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Projects;
