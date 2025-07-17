const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// 🔹 GET: Health check
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'OK', timestamp: new Date().toISOString() });
});

// 🔹 GET: Service status
app.get('/status', (req, res) => {
    res.status(200).json({ service: 'Node.js WAF Test API', version: '1.0.0' });
});

// 🔹 GET: Random joke
app.get('/joke', (req, res) => {
    const jokes = [
        "Why did the developer go broke? Because he used up all his cache!",
        "Why do JavaScript devs wear glasses? Because they don’t C#.",
        "I would tell you a UDP joke, but you might not get it."
    ];
    const joke = jokes[Math.floor(Math.random() * jokes.length)];
    res.json({ joke });
});

// 🔹 POST: Reverse input (original)
app.post('/api/process', (req, res) => {
    const { input } = req.body;

    if (!input) {
        return res.status(400).json({ error: 'No input provided' });
    }

    const reversed = input.split('').reverse().join('');
    res.json({ message: `Reversed input: ${reversed}` });
});

// 🔹 POST: Uppercase input
app.post('/api/uppercase', (req, res) => {
    const { text } = req.body;

    if (!text) {
        return res.status(400).json({ error: 'No text provided' });
    }

    res.json({ message: `Uppercase: ${text.toUpperCase()}` });
});

// 🔹 POST: Word count
app.post('/api/wordcount', (req, res) => {
    const { sentence } = req.body;

    if (!sentence) {
        return res.status(400).json({ error: 'No sentence provided' });
    }

    const wordCount = sentence.trim().split(/\s+/).length;
    res.json({ wordCount });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
