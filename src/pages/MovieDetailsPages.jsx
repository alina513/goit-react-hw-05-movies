import { fetchMoviesById } from 'helpers/helpers';
import { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Loader } from 'components/Loader';
import toast from 'react-hot-toast';

export default function MovieDetailsPage() {
  const [movieData, setMovieData] = useState(null);
  const [loading, setLoading] = useState(false);

  const { movieId } = useParams();
  const location = useLocation();
  const backLinkRef = useRef(location);
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  useEffect(() => {
    async function searchById() {
      if (!movieId) {
        return;
      }
      try {
        setLoading(true);
        const moviesData = await fetchMoviesById(movieId);
        setMovieData(moviesData);
      } catch (error) {
        toast.error('Please, try loading page again')
      }
      finally {
        setLoading(false);
      }
    }
    searchById();
  }, [movieId]);

  return (
    <div>
      <Link to={backLinkRef.current.state?.from ?? '/'}>Go back</Link>
      {loading && <Loader />}
      {movieData && (
        <div>
          <img
            src={
              movieData.poster_path
                ? `https://image.tmdb.org/t/p/w500/${movieData.poster_path}`
                : defaultImg
            }
            width={250}
            alt="poster"
          />
          <h1>
            {movieData.title}({parseInt(movieData.release_date)})
          </h1>
          <p>User score:{parseInt(movieData.popularity)}%</p>
          <h2>Overview</h2>
          <p>{movieData.overview}</p>
          <h3>Genres</h3>
          <ul>
            {movieData.genres &&
              movieData.genres.map(genre => (
                <li key={genre.id}>{genre.name}</li>
              ))}
          </ul>
        </div>
      )}
      <div>
        <h2>Additional information</h2>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </div>

      <Outlet />
    </div>
  );
}
