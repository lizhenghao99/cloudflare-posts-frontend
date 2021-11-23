import { Flex, Heading, Spacer, Text, VStack } from '@chakra-ui/react';
import Card from '../layouts/Card';

const PostCard = (props) => {
    const { value } = props;
    const { title, username, content } = value;
    return (
        <Card m={'1rem'} minW={'30%'}>
            <VStack spacing={'1rem'} align={'flex-start'}>
                <Flex align={'center'} minW={'100%'}>
                    <Heading>
                        {title}
                    </Heading>
                    <Spacer/>
                    <Text>
                        {username}
                    </Text>
                </Flex>
                <Text>
                    {content}
                </Text>
            </VStack>
        </Card>
    );
};

export default PostCard;