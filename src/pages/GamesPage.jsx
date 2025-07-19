import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import GameCard from "../components/GameCard";
import { globalContext } from "../context/GlobalContext";

const GamesPage = () => {
    const [games, setGames] = useState([]);
    const { setIsLoading } = useContext(globalContext);

    useEffect(() => {
        const fetchGames = async () => {
            setIsLoading(true);
            try {
                const response = await axios.get(import.meta.env.VITE_API_URL);
                setGames(response.data);
            } catch (error) {
                console.error("Error fetching games:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchGames();
    }, []);

    return (
        <div className="container mt-4">
            <h2 className="mb-4 text-white">All Games</h2>
            <div className="row">
                {games.map((game) => (
                    <div className="col-md-4 mb-4" key={game.id}>
                        <GameCard game={game} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GamesPage;
