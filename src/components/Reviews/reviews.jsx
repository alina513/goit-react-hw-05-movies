import { fetchMoviesReview } from 'helpers/helpers';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from 'components/Loader';
import toast from 'react-hot-toast';
import css from "./Reviews.module.css"
export default function Reviews() {
  const [moviesData, setMovieData] = useState([]);
  const [loading, setLoading] = useState(false);

  const { movieId } = useParams();
  useEffect(() => {
    async function searchReview() {
      if (!movieId) {
        return;
      }
      try {
        setLoading(true);
        const moviesData = await fetchMoviesReview(movieId);
        setMovieData(moviesData);
      } catch (error) {
        toast.error('Please, try loading page again')
      }
      finally {
        setLoading(false);
      }
    }
    searchReview();
  }, [movieId]);

  return (
    <div>
      {loading && <Loader />}
      {moviesData.length === 0 ? (
        <p>There are no reviews yet</p>
      ) : (
        <ul className={css.list}>
          {moviesData.map(movie => {
            return (
              <li key={movie.id}>
                <h3 className={css.title}>Author:{movie.author}</h3>
                <p className={css.content}>{movie.content}</p>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
