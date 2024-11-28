import React from 'react';
import Header from "./components/header";
import "bootstrap/dist/css/bootstrap.min.css";
import Body1 from './components/body1';
import Body2 from './components/Body2'; // Ensure correct case in import path
import Body3 from './components/Body3'; // Ensure correct case in import path
import First from './components/First';
import Sign_in from './components/Sign_in';
import { Routes, Route } from 'react-router-dom';
import FlightDetails from './components/FlightDetails';
import ShowTickets from './components/ShowTickets';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={
          <>
            <Header /> {/* Include Header component */}
            <First /> {/* First component htmlFor the home page */}
            <Body1 /> {/* Render Body1 */}
            <Body2 /> {/* Render Body2 */}
            <Body3 /> {/* Render Body3 */}
          </>
        } />
        <Route path="/sign-in" element={<Sign_in />} /> {/* Sign-in page */}
        <Route path="/flightdetails" element={<FlightDetails />} />
        <Route path="/showtickets" element={<ShowTickets />} />
      </Routes>
    </div>
  );
}

export default App;
