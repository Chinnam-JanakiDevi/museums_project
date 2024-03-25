const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
  extended: true
}));

const museums = require("./model/museums");
const restaurent = require("./model/restaurent");
const place=require("./model/places");

const url = 'mongodb://127.0.0.1:27017/museums';
mongoose.connect(url);

const db = mongoose.connection;
const PORT = process.env.PORT || 5000

db.on('error', (err) => {
  console.error('Error connecting to MongoDB:', err);
});

db.once('open', () => {
  console.log('Connected successfully to MongoDB');

});

app.get('/', function (req, res) {
   // Updated path
})

// app.get('/hotels/:foodType', async (req, res) => {
//     try {
//         const foodType = req.params.foodType;
//         const hotels = await restaurent.find({ type_of_food: foodType });
//         res.json(hotels);
//     } catch (error) {
//         console.error('Error fetching data:', error);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// });
app.get('/hotels/:foodType', async (req, res) => {
    try {
        const foodType = req.params.foodType;
        const restaurants = await restaurent.find({ type_of_food: foodType }).limit(10);
        // console.log('Restaurants:', restaurants);
        const uniqueFoods = await restaurent.distinct('type_of_food');
        console.log(uniqueFoods);
        if (restaurants.length === 0) {
            console.log(`No restaurants found for food type: ${foodType}`);
        }

        res.json(restaurants);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
app.get('/Read:id', async (req, res) => {
    try {
        const data = await museums.find();
        console.log(data);
        res.json(data);
    } catch (error) {
        console.error('Error fetching data:', error.message);
        res.status(500).json({ error: 'Internal server error' });
    }
});
app.get('/museums', async (req, res) => {
    try {
        const museumsData = await museums.find();
        res.json(museumsData);
    } catch (error) {
        console.error('Error fetching data:', error.message);
        res.status(500).json({ error: 'Internal server error' });
    }
});
app.get('/places/:city', async (req, res) => {
    try {
        const data = await place.find();
        // console.log(museumsData);
        const sig = await place.distinct('Significance');
        console.log(sig);
        res.json(data);
    } catch (error) {
        console.error('Error fetching data:', error.message);
        res.status(500).json({ error: 'Internal server error' });
    }
});
// app.get('/places/:city', async (req, res) => {
//     try {
//         const city = req.params.city;
//         console.log(city)
//         const places = await place.find({ City: city });
//         // const places = await place.find();
//         if (places.length === 0) {
//             return res.status(404).json({ error: 'No places found for the specified city' });
//         }
//         res.json(places);
//     } catch (error) {
//         console.error('Error fetching data:', error);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// });

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
})