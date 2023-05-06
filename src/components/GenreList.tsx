import { HStack, Image, List, ListItem, Text } from '@chakra-ui/react';
import useData from '../effects/use-data';
import useGenres, { Genre } from '../effects/use-genres';
import getCroppedImageUrl from '../utilities/image-url';

const GenreList = () => {
  const { data, error, isLoading } = useGenres();

  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY={'5px'}>
          <HStack>
            <Image boxSize={'32px'} borderRadius={8} src={getCroppedImageUrl(genre.image_background)}></Image>
            <Text fontSize="large">{genre.name} </Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
