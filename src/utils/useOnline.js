import { useState,useEffect } from "react";

const useOnline=()=>{

    const [isOnline, setisOnline] = useState(true)

    useEffect(()=>{
        const handleOnline=()=>{
            console.log('event addedd')
            setisOnline(true)
        }
        const handleOffline=()=>{
            console.log('event removed')
            setisOnline(false)
        }
        window.addEventListener('online',handleOnline)
        window.addEventListener('offline',handleOffline)
        console.log('useEffect')

        return ()=>{
            window.removeEventListener('online',handleOnline);
            window.removeEventListener('offline',handleOffline);
        }
    },[])

    return isOnline;
}

export default useOnline;