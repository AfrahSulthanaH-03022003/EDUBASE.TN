
import React from 'react';
import './SportsPage.css';

const sportsData = [
    {
        title: 'Football',
        description: 'Join the football team to improve your skills and enjoy friendly matches.',
        imageUrl: 'https://images.pexels.com/photos/50713/football-ball-sport-soccer-50713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
        title: 'Basketball',
        description: 'Learn teamwork and strategy by joining our school’s basketball team.',
        imageUrl: 'https://images.pexels.com/photos/163452/basketball-dunk-blue-game-163452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
        title: 'Swimming',
        description: 'Enhance your swimming techniques and compete in various competitions.',
        imageUrl: 'https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
        title: 'Tennis',
        description: 'Play tennis and develop agility and coordination in our training sessions.',
        imageUrl: 'https://images.pexels.com/photos/5730299/pexels-photo-5730299.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
        title: 'Athletics',
        description: 'Participate in track and field events to boost your endurance and strength.',
        imageUrl: 'https://images.pexels.com/photos/3760259/pexels-photo-3760259.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
];

const carouselImages = [
    'https://images.pexels.com/photos/163526/field-hockey-player-girls-game-163526.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/8813564/pexels-photo-8813564.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/8224716/pexels-photo-8224716.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/6539418/pexels-photo-6539418.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/10643696/pexels-photo-10643696.jpeg?auto=compress&cs=tinysrgb&w=600',
];

const SportsPage = () => {
    return (
        <div className="sports-page">
            <h1 className="header">Welcome to Our School Sports Page</h1>

            <div className="cards-container">
                {sportsData.map((sport, index) => (
                    <div className="card" key={index}>
                        <img src={sport.imageUrl} alt={sport.title} />
                        <div className="card-content">
                            <h2 className="card-title">{sport.title}</h2>
                            <p className="card-description">{sport.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            <h2 className="header">Sports Activities Highlights</h2>
            <div className="carousel">
                {carouselImages.map((image, index) => (
                    <img src={image} alt={`Carousel ${index + 1}`} key={index} />
                ))}
            </div>
        </div>
    );
};

export default SportsPage;
