import { useEffect, useState } from "react";
import "../index.css";

const API = () => {
    const [joke, setJoke] = useState({});

const fetchData = async () => {
    try {
        const response = await fetch("https://official-joke-api.appspot.com/random_joke");
        const data = await response.json();
        setJoke(data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

const generateNewJoke = () => {
    fetchData();
}

return <div className="joke-container">
    <h1 className="joke-header">Random Joke Generator</h1>
    <button onClick={generateNewJoke} className="joke-button">Generate new joke</button>
    <p className="joke-text">Setup: {joke.setup}</p>
    <p className="joke-text">Punchline: {joke.punchline}</p>
</div>
};
export default API;