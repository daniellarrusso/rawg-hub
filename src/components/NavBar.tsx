import { HStack, Image, Text } from '@chakra-ui/react';
import logo from '../assets/logo.webp';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';

const NavBar = () => {
    return (
        <HStack padding="10px">
            <Image src={logo} boxSize="60px"></Image>
            <SearchInput />
            <Text>NavBar</Text>
            <ColorModeSwitch />
        </HStack>
    );
};

export default NavBar;
