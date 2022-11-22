import { useEffect, useState } from "react";
    
const useOrderDetail = phoneId => {

    const [phones, setPhones] = useState({});

    useEffect(() => {
        
        
        fetch(`http://localhost:5000/phones/${phoneId}`)
            .then(res => res.json())
            .then(data => setPhones(data))
    }, [phoneId]);

    return [phones]

}
export default useOrderDetail;