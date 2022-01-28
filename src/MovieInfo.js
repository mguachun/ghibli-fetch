import React from "react";
export default function MovieInfo({ film }) {
    if (!film) {
        return <div>Choose a Film</div>;
    }
    return (
        <div>
            <h2>{film.title}</h2>
            <h3>{film.description}</h3>
            <div>
            <h2>Director: {film.director}</h2>
            </div>
            <div>
            <h2>Producer: {film.producer}</h2>
            </div>
            <div>
            <h2>Released: {film.release_date}</h2>
            </div>
            <div>
             <img src={film.image}></img>
            </div>

        </div>
        
    )
}