const express = require('express');
const submit = require('./routes/submit');
const path = require('path');
const portal = require('./routes/portal');
const app = express();
const cors = require('cors');
const axios = require('axios');
const bodyParser = require('body-parser');

const port = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.json());
app.use('/', submit);
app.use('/', portal);

// Serve static files from the 'frontend/public' directory
app.use(express.static(path.join(__dirname, 'frontend', 'public')));

// Serve the React app for any other route
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'public', 'index.html'));
});

app.post('/api/d6', async (req, res) => {
    try {
        const response = await axios.post('https://display.ringba.com/enrich/2251581155616753284', req.body);
        res.json(response.data);
    } catch (error) {
        console.error('Error calling API:', error);
        res.status(500).json({ error: error.message });
    }
});


app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});
