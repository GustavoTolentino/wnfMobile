import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (endpoint, query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    
    const options = {
        method: 'GET',
        url: `http://mdin7.sg-host.com/wp-json/podsadmin/v1/${endpoint}`,
        headers: {},
        params: {}
    }

    const fetchData = async () => {
        setIsLoading(true);

        try {
            const response = await axios.request(options)
            setData(response.data);
        } catch (error) {
            setError(error)
            console.log('Erro aqui');
            console.log(error)
            alert(error);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const refetch = () => {
        setIsLoading(true);
        fetchData();
    }

    return { data, isLoading, error, refetch }
}

export default useFetch;