import React, { useEffect, useState } from 'react';
import './Museums.css';

function Museums() {
    const [museumsData, setMuseumsData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        // Function to fetch data from the backend
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:5000/Read:all');
                const data = await response.json(); // Assuming your backend returns JSON data
                setMuseumsData(data);
                console.log(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData(); // Call the fetch data function when the component mounts
    }, []); // The empty dependency array ensures that this effect runs once when the component mounts

    // Filter museums based on search term
    const filteredMuseums = museumsData.filter(museum => {
        return museum.city.toLowerCase().includes(searchTerm.toLowerCase()) || museum.state.toLowerCase().includes(searchTerm.toLowerCase());
    });

    return (
        <>
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search by state or town"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            <div className="kcontainer">

                <div className="card-list">
                    {filteredMuseums.map((museum, index) => (
                        <div key={index} className="card-item">
                            <img src="https://images.unsplash.com/photo-1513038630932-13873b1a7f29?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bXVzZXVtfGVufDB8fDB8fHww" alt=""></img>
                            <span className="developer">Museum Name : {museum.name}</span>
                            <h3>City/Town : {museum.city}</h3>
                            <h3>State : {museum.state}</h3>
                            <h3>Year Established : {museum.year_established}</h3> {/* Assuming year_established exists for all museums */}
                            <div className="arrow">
                                <i className="fas fa-arrow-right card-icon"></i>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Museums;
