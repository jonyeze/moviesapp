import React from 'react'
import { useEffect, useState } from 'react';
import styles from './MovieDetails.module.css';
import { useParams } from 'react-router-dom';
import { get } from '../Utils/httpClient';
import { Spinner } from '../Components/Spinner';
import { getMovieImg } from '../Utils/getMovieImg';


export function MovieDetails() {
const { movieId } = useParams();
const [isLoading, setIsLoading] = useState(true);
const [movie, setMovie] =  useState(null);



useEffect(() => {
    setIsLoading(true);

    get("/movie/" + movieId).then(data => {
        setIsLoading(false);
        setMovie(data);
    })
}, [movieId]);
if(isLoading){
    return <Spinner />;
}

if (!movie) {
    return null;
}

    const imageUrl = getMovieImg(movie.poster_path, 500);
    return <div className={styles.detailsContainer}>
        <img className={`${styles.col} ${styles.movieImage}`} src={imageUrl} alt={movie.title} />
        <div className={`${styles.col}  ${styles.movieDetails}`}>
            <p className={styles.firstItem}><strong>Title:</strong> {movie.title}</p>
            <p><strong>Genere:</strong> {movie.genres.map(genre => genre.name).join(', ')}</p>
            <p><strong>Description:</strong> {movie.overview}</p>
        </div>
    </div>;
}