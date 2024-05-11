import "./App.css"
import React, { useState } from 'react';

// Define constants for cheese types
const CheeseTypes = {
    AMERICAN: 'American Cheese',
    CHEDDAR: 'Cheddar',
    BLUE: 'Blue Cheese',
    BRIE: 'Brie',
    MOZZARELLA: 'Mozzarella'
};

// Define constant for cheese prices (per kg)
const CheesePrices = {
    [CheeseTypes.AMERICAN]: 10,
    [CheeseTypes.CHEDDAR]: 15,
    [CheeseTypes.BLUE]: 50,
    [CheeseTypes.BRIE]: 40,
    [CheeseTypes.MOZZARELLA]: 30
};

function App() {
    const [amount, setAmount] = useState("");
    const [cheeseType, setCheeseType] = useState("");
    const [price, setPrice] = useState(0);

    const handleAmountChange = (event) => {
        const inputAmount = event.target.value;
        if (inputAmount >= 0 || inputAmount === "") { // Allow positive numbers or empty string
            setAmount(inputAmount);
            calculatePrice(inputAmount, cheeseType); // Call calculatePrice with updated amount and current cheeseType
        }
    }

    const handleCheeseTypeChange = (type) => {
        setCheeseType(type);
        calculatePrice(amount, type); // Call calculatePrice with updated cheeseType and current amount
    }

    const calculatePrice = (inputAmount, type) => {
        if (inputAmount !== "" && type !== "") {
            const pricePerKg = CheesePrices[type];
            const pricePerGram = pricePerKg / 1000; // convert price per kg to price per gram
            const totalPrice = pricePerGram * inputAmount;
            setPrice(totalPrice);
        }
    }

    return (
        <div className="CheeseGrid">
            <div className="Title" alt = "Cheeseria"> A Grate Cheese Website</div>
            <img src={require('./Images/AmericanCheese.png')} alt="american cheese" width={300} height={250} />
            <img src={require('./Images/Cheddar.png')} alt="cheddar" width={300} height={250} />
            <img src={require('./Images/BlueCheese.png')} alt="blue cheese" width={300} height={250} />
            <img src={require('./Images/Brie.png')} alt="brie" width={300} height={250} />
            <img src={require('./Images/Mozzarella.png')} alt="mozzarella" width={300} height={250} />
            <button className="AmericanCheeseButton" onClick={() => handleCheeseTypeChange(CheeseTypes.AMERICAN)}>American Cheese: $10/kg</button>
            <button className="CheddarButton" onClick={() => handleCheeseTypeChange(CheeseTypes.CHEDDAR)}>Cheddar: $15/kg</button>
            <button className="BlueCheeseButton" onClick={() => handleCheeseTypeChange(CheeseTypes.BLUE)}>Blue Cheese: $50/kg</button>
            <button className="BrieBUtton" onClick={() => handleCheeseTypeChange(CheeseTypes.BRIE)}>Brie: $40/kg</button>
            <button className="MozzarellaButton" onClick={() => handleCheeseTypeChange(CheeseTypes.MOZZARELLA)}>Mozzarella: $30/kg</button>
            <form className='form' action="" method="get">
                <input type="number" className="Amount" placeholder="Enter amount in grams" value={amount} onChange={handleAmountChange} />
                <div className="yourCustomDiv" />
                <input type="submit" hidden />
            </form>
            <div className="Price">Price in $: {price}</div>
        </div>
    );
}

export default App;
