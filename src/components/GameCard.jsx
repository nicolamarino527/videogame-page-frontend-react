import React from "react"

export default function GameCard({ game }) {
    return (
        <div className="card mb-5 bg-dark text-white">
            <img
                src={game.coverImage}
                className="card-img-top"
                alt={game.title}
                style={{ height: '450px', objectFit: 'cover' }}
            />
            <div className="card-body">
                <h5 className="card-title">{game.title}</h5>
                <p className="card-text">{game.description}</p>
                <p className="card-text">
                    <small className="text-muted">
                        Release Date: {game.releaseDate}
                    </small>
                </p>
            </div>
        </div>
    );
}

