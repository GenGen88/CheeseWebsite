const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'client/build')));

const CheesePrices = {
    "American Cheese": { pricePerKg: 10, color: "yellow" },
    "Cheddar": { pricePerKg: 15, color: "orange" },
    "Blue Cheese": { pricePerKg: 50, color: "blue" },
    "Brie": { pricePerKg: 40, color: "white" },
    "Mozzarella": { pricePerKg: 30, color: "white" }
};

app.post('/calculate-price', (req, res) => {
    const { amount, cheeseType } = req.body;
    const cheese = CheesePrices[cheeseType];
    const pricePerKg = cheese.pricePerKg;
    const color = cheese.color;
    const pricePerGram = pricePerKg / 1000;
    const totalPrice = pricePerGram * amount;
    res.json({ totalPrice, color });
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
