import React from "react";

export default function MovieInfo({ film }) {
    if (!film) {
        return <div>Choose a Film</div>;
    }
    return (
        <div className="info">
            
            <h2>{film.title}</h2>

            <img src={film.image}></img>

            <h3>{film.description}</h3>
         
            <h2>{film.director}</h2>
           
            <h2>{film.producer}</h2>
          
            <h2>{film.release_date}</h2>

           
          <br></br>

        </div>
        
    )
}