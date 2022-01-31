import React, { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card'
export default function MovieList({ setter }) {
    const [films, setFilms] = useState([]);

    useEffect(() => {
        const url = "https://ghibliapi.herokuapp.com/films";

        fetch(url)
            .then(response => response.json())
            .then(response => setFilms(response))
    }, []);

    return (
        <div>

            {films && films.map(film => (
                <div key={film.id} onClick={e => setter(film)}>
                    {film.title}
                    
                </div>
            ))}



        </div>
    )
}