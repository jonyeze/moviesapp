import React, { useEffect, useState } from 'react';
import { MovieCard } from './MovieCard';
import styles from './MoviesGrid.module.css';
import { get } from '../../Utils/httpClient';
import { Spinner } from '../Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';
import { v4 as uuidv4 } from 'uuid';
import Empty from '../Empty';

const Main = ({search}) => {

  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);



  useEffect(() => {
    setIsLoading(true);
    const searchUrl = search
      ? "/search/movie?query=" + search + "&page=" + page
      : "/discover/movie?page=" + page;
    get(searchUrl).then((data) => {
      setMovies(prevMovies => prevMovies.concat(data.results));
      setHasMore(data.page < data.total_pages);
      setIsLoading(false);
    });
  }, [search, page]);

   if (!isLoading && movies.length === 0) {
    return <Empty />;
  }


  return (
    <InfiniteScroll
    dataLength={movies.length}
    hasMore={hasMore}
    next={() => setPage((prePage) => prePage + 1)}
    loader={isLoading ? <Spinner /> : null}
    >
      <ul className={styles.moviesGrid}>
        {movies.map((movie) => (
          <MovieCard key={uuidv4()} movie={movie} />
        ))}
      </ul>
    </InfiniteScroll>
  );
}

export default Main;