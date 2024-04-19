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
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', submit);
app.use('/', portal);

// Serve frontend files from the 'frontend/build' directory
app.use(express.static(path.join(__dirname, 'frontend', 'build')));

// For any other route, serve the 'index.html' file
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'build', 'index.html'));
});

app.post('/api/track-drive', async (req, res) => {
    try {
        const response = await axios.post('https://elite-calls-com.trackdrive.com/api/v1/leads', req.body);
        res.json(response.data);
        console.log(response.data);
    } catch (error) {
        console.error('Error calling Track Drive API:', error);
        res.status(500).json({ error: error.message });
    }
});

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});
