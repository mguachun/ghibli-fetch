import React from "react";

export default function MovieInfo({ film }) {
    if (!film) {
        return <div>Choose a Film</div>;
    }
    return (
        <div className="info">
            
            <h1>{film.title}</h1>
            <h2>{film.original_title}</h2>

            <img src={film.image}></img>

            <h3 className="description">{film.description}</h3>
         
            <h2 className="description">{film.director}</h2>
           
            <h2 className="description">{film.producer}</h2>
          
            <h2 className="description">{film.release_date}</h2>

           
          <br></br>

        </div>
        
    )
}