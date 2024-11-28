import './Flightbook.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function FlightDetails() {
  const [formData, setFormData] = useState({
    airline: '',
    source: '',
    destination: '',
    fare: '',
    duration: ''
  });
  
  const { id } = useParams();  // Get the 'id' from the route parameters (for editing)
  const navigate = useNavigate();

  // Fetch the existing airline data if 'id' is provided (editing mode)
  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:8090/airlines/${id}`)
        .then(response => {
          setFormData(response.data);  // Pre-fill the form with airline data
        })
        .catch(error => console.log(error));
    }
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      // Update existing airline if 'id' is present
      axios.put(`http://localhost:8090/airlines/${id}`, formData)
        .then(() => navigate('/'))  // Redirect to home page after updating
        .catch(error => console.log(error));
    } else {
      // Create new airline if no 'id' is provided
      axios.post('http://localhost:8090/airlines', formData)
        .then(() => navigate('/'))  // Redirect to home page after creating
        .catch(error => console.log(error));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{id ? 'Update Flight Details' : 'Book your tickets'}</h2>

      <div className="mb-3">
        <label>Airline</label>
        <input 
          type="text" 
          name="airline" 
          className="form-control" 
          value={formData.airline} 
          onChange={handleChange} 
        />
      </div>

      <div className="mb-3">
        <label>Source</label>
        <input 
          type="text" 
          name="source" 
          className="form-control" 
          value={formData.source} 
          onChange={handleChange} 
        />
      </div>

      <div className="mb-3">
        <label>Destination</label>
        <input 
          type="text" 
          name="destination" 
          className="form-control" 
          value={formData.destination} 
          onChange={handleChange} 
        />
      </div>

      <div className="mb-3">
        <label>Fare</label>
        <input 
          type="number" 
          name="fare" 
          className="form-control" 
          value={formData.fare} 
          onChange={handleChange} 
        />
      </div>

      <div className="mb-3">
        <label>Duration</label>
        <input 
          type="text" 
          name="duration" 
          className="form-control" 
          value={formData.duration} 
          onChange={handleChange} 
        />
      </div>

      <button type="submit" className="btn btn-primary">
        {id ? 'Update' : 'Book'}
      </button>
    </form>
  );
}

export default FlightDetails;
