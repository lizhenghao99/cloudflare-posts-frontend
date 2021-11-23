import axios from 'axios';
import useSWR from 'swr';

export function useGet(url, query) {
    const fetcher = (url) => axios({
        method: 'GET',
        baseURL: process.env.NEXT_PUBLIC_BACKEND_BASE_URL,
        url,
        params: query,
        withCredentials: true,
    }).then(res => res.data);
    const { data, error } = useSWR([url, query], fetcher);

    return {
        data: data,
        isLoading: !error && !data,
        isError: error,
    };
}