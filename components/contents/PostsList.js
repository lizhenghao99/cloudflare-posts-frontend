import { useGet } from '../../lib/hooks';
import LoadingPage from './LoadingPage';
import PostCard from './PostCard';

const PostsList = (props) => {
    const { data, error } = useGet('/posts');
    if (!data) {
        return (
            <LoadingPage/>
        );
    }
    return (
        <>
            {data.map((value, index) => (
                <PostCard key={index} value={value}/>
            ))}
        </>
    );
};

export default PostsList;