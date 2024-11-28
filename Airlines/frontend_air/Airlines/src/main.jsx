import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sign_in from './components/Sign_in';
import FlightDetails from './components/FlightDetails';
import ShowTickets from './components/ShowTickets';

// Wrap your entire app in BrowserRouter for routing
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>  {/* Wrap everything inside BrowserRouter */}
      <Routes> 
        {/* Define routes here */}
        <Route path="/" element={<App />} />
        <Route path="/sign-in" element={<Sign_in/>} />
        <Route path="/flightdetails" element={<FlightDetails />} />
        <Route path="/showtickets" element={<ShowTickets />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
