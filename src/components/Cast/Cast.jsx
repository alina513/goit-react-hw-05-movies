import { fetchMoviesCast } from 'helpers/helpers';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from 'components/Loader';
import toast from 'react-hot-toast';
import css from "./Cast.module.css"
export default function () {
  const [moviesData, setMovieData] = useState([]);
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
  useEffect(() => {
    async function searchCast() {
      if (!movieId) {
        return;
      }
      try {
        setLoading(true);
        const moviesData = await fetchMoviesCast(movieId);
        setMovieData(moviesData);
      } catch (error) {
        toast.error('Please, try loading page again')
      }
      finally {
        setLoading(false);
      }
    }
    searchCast();
  }, [movieId]);

  return (
    <div>
      {loading && <Loader />}
      <ul className={css.list}>
        {moviesData.map(movie => {
          return (
            <li key={movie.id} className={css.item}>
              <img
                src={
                  movie.profile_path
                    ? `https://image.tmdb.org/t/p/w500${movie.profile_path}`
                    : defaultImg
                }
                width={250}
                alt="actor"
              />
              <h3>{movie.name}</h3>
              <p>{movie.character}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
