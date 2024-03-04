import  { useEffect, useState } from 'react';

const useItems = () => {
    const [items, setItems] = useState([]);
  

    useEffect(() => {
      
      fetch("https://ware-house-server-zeta.vercel.app/phones")
        .then((res) => res.json())
        .then((data) => setItems(data));
    }, []);

  
    return [items, setItems]
};

export default useItems;