import React from 'react'
import './Academics.css';


const Academics = () => {

    const cards = [
        { id: 1, title: 'English', image: 'https://images.pexels.com/photos/4235845/pexels-photo-4235845.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
        { id: 2, title: 'Tamil', image: 'https://i.ytimg.com/vi/SHglOiSKhm8/maxresdefault.jpg' },
        { id: 3, title: 'Maths', image: 'https://images.pexels.com/photos/1329302/pexels-photo-1329302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
        { id: 4, title: 'Science', image: 'https://images.pexels.com/photos/256262/pexels-photo-256262.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
        { id: 5, title: 'Social Science', image: 'https://images.pexels.com/photos/592753/pexels-photo-592753.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    ];

  return (
    <div>
       <div className="academics-container">
            
            <h1 className="academics-title">Academics</h1>
            <div className="academics-cards">
                {cards.map(card => (
                    <div key={card.id} className="academics-card">
                        <img src={card.image} alt={card.title} className="academics-card-image" />
                        <div className="academics-card-content">
                            <h2 className="academics-card-title">{card.title}</h2>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    </div>
  )
}

export default Academics
