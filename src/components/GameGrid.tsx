import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames, { Platform } from '../effects/use-games';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';
import { Genre } from '../effects/use-genres';

interface Props {
    selectedGenre: Genre | null;
    selectedPlaform: Platform | null;
}
const GameGrid = ({ selectedGenre, selectedPlaform }: Props) => {
    const { data, error, isLoading } = useGames(selectedGenre, selectedPlaform);
    const skeletons = [1, 2, 3, 4, 5, 6];
    return (
        <div>
            {error && <Text>{error}</Text>}
            <ul>
                <SimpleGrid
                    columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
                    padding="10px"
                    spacing={3}
                >
                    {isLoading &&
                        skeletons.map((skeleton) => (
                            <GameCardContainer key={skeleton}>
                                <GameCardSkeleton />
                            </GameCardContainer>
                        ))}
                    {data.map((game) => (
                        <GameCardContainer key={game.id}>
                            <GameCard game={game} />
                        </GameCardContainer>
                    ))}
                </SimpleGrid>
            </ul>
        </div>
    );
};

export default GameGrid;
