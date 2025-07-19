import React from "react"
import { Link } from "react-router-dom";

export default function GameCard({ game }) {
    return (
        <Link to={`/videogames/${game.id}`} style={{ textDecoration: "none", maxHeight: '650px', overflow: 'hidden' }}>
            <div className="card mb-5 bg-dark text-white">
                <img
                    src={game.coverImage}
                    className="card-img-top"
                    alt={game.title}
                    style={{ height: '450px', objectFit: 'cover' }}
                />
                <div className="card-body">
                    <h5 className="card-title">{game.title}</h5>
                    <p><strong>Description:</strong> {game.description ?? "Unknown"}</p>
                    <p><strong>Release:</strong> {game.releaseDate ?? "Unknown"}</p>
                </div>
                <div>

                </div>
            </div>
        </Link>
    );
}

