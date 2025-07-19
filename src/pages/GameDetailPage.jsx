import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { globalContext } from "../context/GlobalContext";

const GameDetailPage = () => {
    const { id } = useParams();
    const [game, setGame] = useState(null);
    const { setIsLoading } = useContext(globalContext);

    useEffect(() => {
        const fetchGame = async () => {
            setIsLoading(true);
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/${id}`);
                setGame(response.data);
            } catch (error) {
                console.error("Error fetching game details:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchGame();
    }, [id]);

    if (!game) return <div className="text-white">Caricamento...</div>;

    return (
        <section>
            <div className="container mt-4 text-white">
                <h2>{game.title}</h2>
                {game.coverImage && (
                    <img
                        src={game.coverImage}
                        alt={game.title}
                        style={{ width: "100%", maxHeight: "500px", objectFit: "cover" }}
                        className="mb-3"
                    />
                )}
                <p><strong>Description:</strong> {game.description ?? "Unknown"}</p>
                <p><strong>Release:</strong> {game.releaseDate ?? "Unknown"}</p>
                <p><strong>Genre:</strong> {game.genres?.map(g => g.name).join(", ")}</p>
                <p><strong>Platforms:</strong> {game.platforms?.map(p => p.name).join(", ")}</p>
            </div>
            <div className="container mt-4 text-white">
                <h3>Discussions</h3>
                {game.discussions && game.discussions.length > 0 ? (
                    game.discussions.map((discussion) => (
                        <div key={discussion.id} className="mb-3 p-3 border rounded bg-dark text-white">
                            <h5>{discussion.title}</h5>
                            <p>{discussion.content}</p>
                            <small>{new Date(discussion.date).toLocaleString()}</small>
                            <br />
                            <small><strong>User:</strong> {discussion.user?.userName || "Anonymous"}</small>
                        </div>
                    ))
                ) : (
                    <p>No discussions available.</p>
                )}
            </div>

        </section>

    );
};

export default GameDetailPage;
