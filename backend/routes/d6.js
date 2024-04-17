const express = require('express');
const router = express.Router();

router.post('/api/d6', async (req, res) => {
    try {
        // Make API request to D6 endpoint
        const response = await axios.post('https://display.ringba.com/enrich/2251581155616753284', req.body);
        // Handle D6 response
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;