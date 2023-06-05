import axios from "axios"
import { useEffect } from "react"
import { useState } from "react";

export function useRequestData(url,estadoInicial){
    const [data,setData] = useState(estadoInicial)
    const [isLoading,setIsLoading] = useState(false)
    const [error,setError] = useState(false)
    useEffect(() => {
        setIsLoading(true)
        axios
        .get(url)
        .then((response) => {
          setIsLoading(false)
          setData(response.data);
        })
        .catch((error) => {
            setIsLoading(false)
            setError(true)
            console.log(error);
        });
    }, []);
    return [data,isLoading,error]
}