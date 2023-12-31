import genres from '../data/genres';
import useData from './use-data';

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

const useGenres = () => ({ data: genres, isLoading: false, error: null }); //  useData<Genre>('/genres');

export default useGenres;
