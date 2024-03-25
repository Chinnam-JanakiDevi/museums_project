// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './Places.css';

// function Places() {
//     const [city, setCity] = useState('');
//     const [places, setPlaces] = useState([]);
//     const [error, setError] = useState('');

//     useEffect(() => {
//         fetchData();
//     }, [city]);

//     const fetchData = async () => {
//         try {
//             if (!city) {
//                 setError('Please enter a city');
//                 return;
//             }

//             const response = await axios.get(`http://localhost:5000/places/${city}`);
//             setPlaces(response.data);
//             console.log(response)
//             setError('');
//         } catch (err) {
//             setError('Error fetching data');
//             console.error(err);
//         }
//     };

//     const handleInputChange = (event) => {
//         setCity(event.target.value);
//     };

//     return (
//         <div>
//             <div>
//                 <input
//                     type="text"
//                     placeholder="Enter city"
//                     value={city}
//                     onChange={handleInputChange}
//                 />
//                 <button onClick={fetchData}>Search</button>
//             </div>

//             {error && <p>{error}</p>}

//             <div className="places-container">
//                 {places.map((place) => (
//                     <div key={place.id} className="place-card">
//                         <img src="https://images.unsplash.com/photo-1533587851505-d119e13fa0d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dG91cmlzbXxlbnwwfHwwfHx8MA%3D%3D" alt="Place" className="place-image" />
//                         <div className="place-details">
//                             <h2 style={{ color: "#944E63", fontFamily: "monospace", fontWeight: "bolder", fontSize: "20px" }}>{place.Name}</h2>
//                             <p>Type: {place.Type}</p>
//                             <p>Zone:
//                                 {place.Zone
//                                 }</p>
//                             <p>Significance: {place.Significance}</p>

//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Places;
// ****---------------------------------------------------------------------//****** */
// import React, { useEffect, useState } from 'react';
// import './Places.css';

// function Places() {
//     const [PlacesData, setPlacesData] = useState([]);
//     const [searchTerm, setSearchTerm] = useState('');

//     useEffect(() => {
//         // Function to fetch data from the backend
//         const fetchData = async () => {
//             try {
//                 const response = await fetch('http://localhost:5000/places/${city}');
//                 const data = await response.json(); // Assuming your backend returns JSON data
//                 setPlacesData(data);
//                 console.log(data);
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//             }
//         };

//         fetchData(); // Call the fetch data function when the component mounts
//     }, []); // The empty dependency array ensures that this effect runs once when the component mounts

//     // Filter Places based on search term
//     const filteredPlaces = PlacesData.filter(museum => {
//         return museum.City.toLowerCase().includes(searchTerm.toLowerCase()) || museum.State.toLowerCase().includes(searchTerm.toLowerCase());
//     });

//     return (
//         <>
//             <div className="search-bar">
//                 <input
//                     type="text"
//                     placeholder="Search by state or town"
//                     value={searchTerm}
//                     onChange={(e) => setSearchTerm(e.target.value)}
//                 />
//             </div>
//             <div className="kcontainer">
//                 <div className="card-list">
//                     {filteredPlaces.map((museum, index) => (
//                         <div key={index} className="card-item">
//                             {/* <img src="https://images.unsplash.com/photo-1513038630932-13873b1a7f29?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bXVzZXVtfGVufDB8fDB8fHww" alt=""></img> */}
//                             <h2 style={{ color: "#944E63", fontFamily: "monospace", fontWeight: "bolder", fontSize: "20px" }}>{museum.Name}</h2>
//                             <h3>City/Town : {museum.City}</h3>
//                             <h3>State : {museum.State}</h3>
//                             <h3>Year Established : {museum.EstablishmentYear}</h3>
//                             <h3>time needed to visit(inhrs) : {museum.timeneededtovisitinhrs}</h3>
//                             <h3>Googlereviewrating : {museum.Googlereviewrating}</h3>
//                             <h3>EntranceFeeinINR : {museum.EntranceFeeinINR}</h3>
//                             <h3>Airportwith50kmRadius : {museum.Airportwith50kmRadius}</h3>
//                             <h3>Significance : {museum.Significance}</h3>
//                             <h3>BestTimetovisit : {museum.BestTimetovisit}</h3>
//                             <div className="arrow">
//                                 <i className="fas fa-arrow-right card-icon"></i>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </>
//     );
// }

// export default Places;

import React, { useEffect, useState } from 'react';
import './Places.css';

function Places() {
    const [placesData, setPlacesData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedSignificance, setSelectedSignificance] = useState('');

    useEffect(() => {
        // Fetch data from the backend when the component mounts
        fetchData();
    }, []); // The empty dependency array ensures that this effect runs once when the component mounts

    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:5000/places/${city}');
            const data = await response.json(); // Assuming your backend returns JSON data
            setPlacesData(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    // Filter places based on search term and selected significance
    const filteredPlaces = placesData.filter(place => {
        const cityMatch = place.City.toLowerCase().includes(searchTerm.toLowerCase());
        const stateMatch = place.State.toLowerCase().includes(searchTerm.toLowerCase());
        const significanceMatch = !selectedSignificance || place.Significance === selectedSignificance;

        return (cityMatch || stateMatch) && significanceMatch;
    });

    // Function to handle select change
    const handleSelectChange = event => {
        setSelectedSignificance(event.target.value);
    };

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

            <div className="select-container">
                <h3 style={{ color: "#944E63", fontFamily: "monospace", fontWeight: "bolder", fontSize: "20px" }}><label>Select Significance:</label></h3>
                <select value={selectedSignificance} onChange={handleSelectChange}>
                    <option value="">All</option>
                    <option value="Adventure">Adventure</option>
                    <option value="Cultural">Cultural</option>
                    <option value="Educational">Educational</option>
                    <option value="Historical">Historical</option>
                    <option value="Food">Food</option>
                    <option value="Religious">Religious</option>
                    <option value="Adventure">Adventure</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Shopping">Shopping</option>
                    <option value="Sports">Sports</option>
                    <option value="Environmental">Environmental</option>
                    <option value="Agricultural">Agricultural</option>
                    <option value="Archaeological">Archaeological</option>
                    <option value="Architectural">Architectural</option>
                    <option value="Artistic">Artistic</option>
                    <option value="Botanical">Botanical</option><option value="Adventure">Adventure</option>
                    <option value="Engineering Marvel">Engineering Marvel</option>
                    <option value="Scientific">Scientific</option>
                    <option value="Spiritual">Spiritual</option>
                    {/* Add more options for other significance values */}
                </select>
            </div>
            <div className="kcontainer">
                <div className="card-list">
                    {filteredPlaces.map((place, index) => (
                        <div key={index} className="card-item">
                            {/* Render place details here */}
                            <h2 style={{ color: "#944E63", fontWeight: "bolder", fontSize: "30px" }}>{place.Name}</h2>
                            <h3 >City/Town : {place.City}</h3>
                            <h3 >State : {place.State}</h3>
                            <h3 >Year Established : {place.EstablishmentYear}</h3>
                            <h3 >time needed to visit(inhrs) : {place.timeneededtovisitinhrs}</h3>
                            <h3 >Google Review Rating : {place.Googlereviewrating}</h3>
                            <h3 >Entrance Fee(in INR) : {place.EntranceFeeinINR}</h3>
                            <h3 >Airportwith50kmRadius : {place.Airportwith50kmRadius}</h3>
                            <h3 >Significance : {place.Significance}</h3>
                            <h3 >Best Time to visit : {place.BestTimetovisit}</h3>
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

export default Places;
