import useData from '../effects/use-data';
import useGenres, { Genre } from '../effects/use-genres';

const GenreList = () => {
  const { data, error, isLoading } = useGenres();

  return (
    <ul>
      {data.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
