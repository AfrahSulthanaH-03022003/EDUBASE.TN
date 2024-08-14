import React from 'react';
import './Landing.css';
import Card from './Card';


const LandingPage = () => {
    const images = [
        { id: 1, src: 'https://images.pexels.com/photos/764681/pexels-photo-764681.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Education Image 1' },
        { id: 2, src: 'https://images.pexels.com/photos/1720188/pexels-photo-1720188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', alt: 'Education Image 2' },
        { id: 3, src: 'https://images.pexels.com/photos/5636692/pexels-photo-5636692.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', alt: 'Education Image 3' },
        { id: 4, src: 'https://images.pexels.com/photos/159632/school-children-happy-food-159632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', alt: 'Education Image 4' },
        { id: 5, src: 'https://images.pexels.com/photos/8422132/pexels-photo-8422132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', alt: 'Education Image 5' },
        { id: 6, src: 'https://images.pexels.com/photos/5905492/pexels-photo-5905492.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', alt: 'Education Image 6' }
    ];

    const schemes = [
        { id: 1, title: 'Naan Mudhalvan', description: 'Naan Mudhalvan Upskilling Platform' },
        { id: 2, title: 'Samagra Shiksha', description: 'Children enrolled in schools in young age.' },
        { id: 3, title: 'Smart Class Rooms', description: 'Smart Classrooms for primary and higher secondary.' },
        { id: 4, title: 'Chess Game ', description: 'Improving analytical skills.' },
        { id: 5, title: 'Scout and Guide Movement ', description:'Learning volunteership' },
        { id: 6, title: 'Arignar Anna Leadership Award', description: 'Illam thedi Kalvi Thittam.' }
    ];

    return (
        <div className="landing-page">
            {/* <header className="landing-header">
                <h1>Welcome to EduBase</h1>
                <p>Your gateway to quality education and resources.</p>
            </header> */}

            <section className="landing-section">
                <h2>About Education</h2>
                <p>Education is the key to unlocking opportunities and achieving dreams. Our platform provides comprehensive resources to enhance learning experiences for students of all ages.</p>
            </section>

            <section className="landing-section">
                <h2>Our Gallery</h2>
                <div className="card-container">
                    {images.map(image => (
                        <Card key={image.id} image={image} />
                    ))}
                </div>
            </section>

            <section className="landing-section">
                <h2>Our Schemes</h2>
                <div className="card-container">
                    {schemes.map(scheme => (
                        <Card key={scheme.id} title={scheme.title} description={scheme.description} />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default LandingPage;
