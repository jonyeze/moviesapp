import styles from './Movie.module.css';
import { Link } from 'react-router-dom';
import {getMovieImg} from '../../Utils/getMovieImg';

export function MovieCard({ movie }) {
    const imageUrl = getMovieImg(movie.poster_path, 300)
    return (
        <li className={styles.movieCard}>
            <Link to={'/movies/' + movie.id}>
                <img width={230} height={345} className={styles.movieImage} src={imageUrl} alt={movie.title} key={movie.id}/>
                <div className={styles.movieTitle}>{movie.title}</div>
            </Link>
        </li>
    );
}