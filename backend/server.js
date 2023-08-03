const express = require('express');
const FitnessTip = require('./models/fitnessTips');
const app = express();
const port = 3000; // Choose a suitable port number
const connectDB=require("./db");
connectDB();
const tips = [
    'Stay hydrated during workouts.',
    'Warm up before exercising to prevent injuries.',
    'Get enough sleep for optimal muscle recovery.',
    // Add more tips as needed
];
app.post('/fitness-tips', async (req, res) => {
    try {
        const { title, description } = req.body;
        const fitnessTip = await FitnessTip.create({ title, description });
        res.status(201).json(fitnessTip);
    } catch (error) {
        console.error('Error creating fitness tip:', error);
        res.status(500).json({ error: 'Failed to create fitness tip' });
    }
});
app.get('/fitness-tips', async (req, res) => {
    try {
        const fitnessTips= await FitnessTip.find();
        res.json(fitnessTips);
    } catch (error) {
        console.error('Error retrieving fitness tips:', error);
        res.status(500).json({ error: 'Failed to retrieve fitness tips' });
    }
});
app.put('/fitness-tips/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description } = req.body;
        const fitnessTip = await FitnessTip.findByIdAndUpdate(id, { title, description }, { new: true });
        res.json(fitnessTip);
    } catch (error) {
        console.error('Error updating fitness tip:', error);
        res.status(500).json({ error: 'Failed to update fitness tip' });
    }
});
// Delete a fitness tip
app.delete('/fitness-tips/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const fitnessTip = await FitnessTip.findByIdAndDelete(id);
        res.json(fitnessTip);
    } catch (error) {
        console.error('Error deleting fitness tip:', error);
        res.status(500).json({ error: 'Failed to delete fitness tip' });
    }
});

app.get('/api/tips/random', (req, res) => {
    const randomIndex = Math.floor(Math.random() * tips.length);
    const randomTip = tips[randomIndex];
    res.json({ tip: randomTip });
})
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
