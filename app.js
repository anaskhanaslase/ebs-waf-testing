const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Dummy API route
app.post('/api/process', (req, res) => {
    const { input } = req.body;

    // Simulate logic (e.g., reverse string)
    if (!input) return res.status(400).json({ error: 'No input provided' });

    const reversed = input.split('').reverse().join('');
    res.json({ message: `Reversed input: ${reversed}` });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));