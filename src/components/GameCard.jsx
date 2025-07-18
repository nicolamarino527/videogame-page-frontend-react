import React from "react"

export default function GameCard() {
    return (
        <>
            <div className="card mb-5 bg-transparent  text-white">
                <img
                    src={gtaImage}
                    className="card-img-top"
                    alt="..."
                    style={{ height: '450px', objectFit: 'cover' }}
                />
                <div className="card-body">
                    <h5 className="card-title">Will GTA6 be the best game ever?</h5>
                    <p className="card-text">
                        I hope so, the game will cost around 100$ and my pc can't handle the game so i relly hope will be the best game of my life
                    </p>
                    <p className="card-text">
                        <small className="text-body-transparent ">by me</small>
                    </p>
                </div>
            </div>
        </>
    )
}