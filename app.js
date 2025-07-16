const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// 🔹 Health check endpoint
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Dummy status endpoint (for WAF CAPTCHA test or logging)
app.get('/status', (req, res) => {
    res.status(200).json({ service: 'Node.js WAF Test API', version: '1.0.0' });
});

// 🔹 Main API route: reverse input
app.post('/api/process', (req, res) => {
    const { input } = req.body;

    if (!input) {
        return res.status(400).json({ error: 'No input provided' });
    }

    const reversed = input.split('').reverse().join('');
    res.json({ message: `Reversed input: ${reversed}` });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
