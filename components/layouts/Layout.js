import { Box, Flex, useColorModeValue } from '@chakra-ui/react';

const Layout = (props) => {
    const lightBg = useColorModeValue('gray.50', 'gray.800');
    const darkBg = useColorModeValue('blue.500', 'blue.900');
    return (
        <Flex
            bg={lightBg}
            minH="100vh"
            maxH={'100vh'}
            direction={'column'}
            alignItems={'center'}
            borderLeftRadius={'2xl'}
            overflow={'auto'}
            boxShadow={'xl'}
        >
            {props.children}
            <Box minH={'2rem'}/>
        </Flex>
    );
};

export default Layout;