import { Button, HStack, Image, List, ListItem, Spinner, Text } from '@chakra-ui/react';
import useGenres, { Genre } from '../effects/use-genres';
import getCroppedImageUrl from '../utilities/image-url';

interface Props {
    onSelectGenre: (genre: Genre) => void;
    selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
    const { data, error, isLoading } = useGenres();

    if (isLoading) return <Spinner />;

    if (error) return null;

    return (
        <List>
            {data.map((genre) => (
                <ListItem key={genre.id} paddingY={'5px'}>
                    <HStack>
                        <Image
                            boxSize={'32px'}
                            borderRadius={8}
                            src={getCroppedImageUrl(genre.image_background)}
                        ></Image>
                        <Button
                            fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'}
                            onClick={() => onSelectGenre(genre)}
                            variant={'link'}
                            fontSize="large"
                        >
                            {genre.name}{' '}
                        </Button>
                    </HStack>
                </ListItem>
            ))}
        </List>
    );
};

export default GenreList;
