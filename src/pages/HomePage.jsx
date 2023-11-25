import List from 'components/List/List';
import { useEffect, useState } from 'react';
import { fetchMovies } from 'helpers/helpers';
import { Loader } from 'components/Loader';
import toast from 'react-hot-toast';
import css from "./HomePage.module.css"
export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getMoviesData = async () => {
      try {
        setLoading(true);
        const moviesData = await fetchMovies();
        setMovies(moviesData);
      } catch (error) {
        toast.error('Please, try loading page again')
      }
      finally {
        setLoading(false);
      }
    };

    getMoviesData(); // Виклик функції отримання фільмів один раз при завантаженні компонента
  }, []);

  return (
    <main>
      <h2 className={css.title}>Trending today</h2>
      {loading && <Loader />}
      {movies.length > 0 && <List movies={movies} />}
    </main>
  );
}
