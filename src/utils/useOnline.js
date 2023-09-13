import { useState,useEffect } from "react";
const useOnline = () =>{
    const [isOnline,setIsOnline] = useState(true);
    
    useEffect(() => {
        const onlineFunction = () => {
            setIsOnline(true);
        }
        const offlineFunction = () => {
            setIsOnline(false);
        }

        window.addEventListener("Online",onlineFunction); 
        window.addEventListener("Offline",offlineFunction);

        return () => {
            window.removeEventListener("online", onlineFunction);
            window.removeEventListener("offline", offlineFunction);
        };

    },[]);  

   

    return isOnline;
};

export default useOnline;