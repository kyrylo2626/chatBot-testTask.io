import axios from 'axios'
import { useQuery } from '@tanstack/react-query';


export const useLoading = () => {

    const URL = import.meta.env.VITE_SERVER + '/api';
    const API_URL = 'https://api.quotable.io/random';


    const checkServerStatus = useQuery({
        queryKey: ['server_status'],
        queryFn: () => axios.get(URL),
        refetchOnReconnect: true
    })

    const checkAPIServerStatus = useQuery({
        queryKey: ['server_api_status'],
        queryFn: () => axios.get(API_URL),
        refetchOnReconnect: true
    })


    return { checkServerStatus, checkAPIServerStatus }

}
