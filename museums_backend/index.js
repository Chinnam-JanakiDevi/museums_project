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

app.get('/hotels/:foodType', async (req, res) => {
    try {
        const foodType = req.params.foodType;
        const hotels = await restaurent.find({ type_of_food: foodType });
        res.json(hotels);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
app.get('/Read:id', async (req, res) => {
    try {
        const data = await museums.find();
        // console.log(museumsData);
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

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
})