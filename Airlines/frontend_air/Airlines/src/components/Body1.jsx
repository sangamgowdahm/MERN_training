import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Body1.css';
import Flight2 from './Flight2.webp';

const Body1 = () => {
  const navigate = useNavigate();

  const handleBookTicket = () => {
    navigate('/flightdetails'); // Programmatic navigation to FlightDetails page
  };

  const ShowListTickets = () => {
    navigate('/showtickets'); // Programmatic navigation to ShowTickets page
  };

  return (
    <div
      className="body1-container"
      style={{
        backgroundImage: `url(${Flight2})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        width: '100vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: '2rem',
      }}
    >
      <div className="text-container">
        <h1 className="hero-title">
          TRAVEL WITH JOY AND EASE
        </h1>
        <p className="hero-text">
          Experience the joy of travel with us. We offer a wide range of flights to destinations around the world at affordable prices and exceptional customer service to make your travel experience exceptional and unforgettable 
        </p>
        <div className="button-group">
          <button
            type="button"
            className="btn primary-btn"
            onClick={handleBookTicket}
          >
            Book Ticket
          </button>
          <button
            type="button"
            className="btn secondary-btn"
            onClick={ShowListTickets}
          >
            Show Tickets
          </button>
        </div>
      </div>
    </div>
  );
};

export default Body1;
