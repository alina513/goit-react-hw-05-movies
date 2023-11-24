import { Form } from '../components/Form/Form';
import { useSearchParams } from 'react-router-dom';
import { fetchMoviesByQuery } from 'helpers/helpers';
import { useEffect, useState } from 'react';
import List from 'components/List/List';
import { Loader } from 'components/Loader';
import toast from 'react-hot-toast';

export default function MoviePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (query === '') {
      return;
    }
    async function searchByQuery() {
      try {
        setLoading(true);
        const moviesData = await fetchMoviesByQuery(query);
        setMovies(moviesData);
      } catch (error) {
        toast.error('Please, try loading page again')
      }
      finally {
        setLoading(false);
      }
    }

    searchByQuery();
  }, [query]);

  const handleSubmit = event => {
    event.preventDefault();

    const searchValue = event.target.elements.text.value.trim();
    console.log(searchValue);

    if (searchValue === '') {
      alert('Write something');
      return;
    }
    searchParams.set('query', searchValue);
    setSearchParams(searchParams);
    event.target.elements.text.value = ' ';
  };

  return (
    <div>
      <Form submit={handleSubmit} />
      {loading && <Loader />}
      <List movies={movies} />
    </div>
  );
}
