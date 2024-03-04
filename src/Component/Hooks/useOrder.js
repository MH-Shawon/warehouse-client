import { useEffect, useState } from "react";
    
const useOrderDetail = phoneId => {

    const [phones, setPhones] = useState({});

    useEffect(() => {
        
        
        fetch(`https://ware-house-server-zeta.vercel.app/phones/${phoneId}`)
            .then(res => res.json())
            .then(data => setPhones(data))
    }, [phoneId]);

    return [phones]

}
export default useOrderDetail;