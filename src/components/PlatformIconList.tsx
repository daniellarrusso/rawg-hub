import { HStack, Icon, Text } from '@chakra-ui/react';
import { Platform } from '../effects/use-games';
import { FaWindows, FaApple, FaPlaystation, FaLinux, FaXbox, FaAndroid } from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';
import { BsGlobe } from 'react-icons/bs';
import { IconType } from 'react-icons';

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    android: FaAndroid,
    mac: FaApple,
    linux: FaLinux,
    nintendo: SiNintendo,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };
  return (
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <Icon key={platform.slug} color={'gray.500'} as={iconMap[platform.slug]} />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
