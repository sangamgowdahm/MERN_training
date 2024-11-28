import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './ShowTickets.css';

function ShowTickets() {
  const [airlines, setAirlines] = useState([]); // State to store the airlines data
  const [showModal, setShowModal] = useState(false); // Modal visibility state
  const [selectedAirid, setSelectedAirid] = useState(null); // Selected airline ID for deletion

  // Fetch airlines data on component mount
  useEffect(() => {
    axios.get('http://localhost:8090/airlines')
      .then(response => setAirlines(response.data.data)) // Assuming response.data contains the array of airlines
      .catch(error => console.log(error));
  }, []);

  // Handle the delete action and show modal
  const handleDelete = (id) => {
    setSelectedAirid(id); // Set selected airline ID
    setShowModal(true); // Show confirmation modal
  };

  // Confirm the deletion of the selected airline
  const confirmDelete = () => {
    axios.delete(`http://localhost:8090/airlines/${selectedAirid}`) // Use selectedAirid here, not setSelectedAirid
      .then(() => {
        // Remove deleted airline from state using a functional update to ensure fresh state
        setAirlines(prevAirlines => prevAirlines.filter(airline => airline._id !== selectedAirid));
        setShowModal(false); // Hide the modal after deleting
        setSelectedAirid(null); // Reset selected ID
      })
      .catch(error => console.log(error));
  };

  return (
    <div>
      <table className="table text-center">
        <thead>
          <tr>
            <th>Airline</th>
            <th>Source</th>
            <th>Destination</th>
            <th>Fare</th>
            <th>Duration</th>
            <th>Actions</th> {/* This is for the delete button */}
          </tr>
        </thead>
        <tbody>
          {airlines.map(airline => (
            <tr key={airline._id}>
              <td>{airline.airline}</td>
              <td>{airline.source}</td>
              <td>{airline.destination}</td>
              <td>{airline.fare}</td>
              <td>{airline.duration}</td>
              <td>
                {/* Removed the Edit button */}
                <button onClick={() => handleDelete(airline._id)} className="btn btn-danger btn-sm ms-2">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal for confirmation */}
      {showModal && (
        <div className="modal show d-block" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Confirm Delete</h5>
                <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
              </div>
              <div className="modal-body">
                <p>Are you sure you want to delete this ticket?</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Cancel</button>
                <button type="button" className="btn btn-danger" onClick={confirmDelete}>Delete</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ShowTickets;
