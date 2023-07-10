import { HStack, Image, Text } from '@chakra-ui/react';
import logo from '../assets/logo.webp';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';

interface Props {
    onSearchInput: (search: string) => void;
}
const NavBar = ({ onSearchInput }: Props) => {
    return (
        <HStack padding="10px">
            <Image src={logo} boxSize="60px"></Image>
            <SearchInput onSearch={onSearchInput} />
            <Text>NavBar</Text>
            <ColorModeSwitch />
        </HStack>
    );
};

export default NavBar;
