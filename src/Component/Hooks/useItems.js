import  { useEffect, useState } from 'react';

const useItems = () => {
    const [items, setItems] = useState([]);
  

    useEffect(() => {
      fetch('product.json')
        .then((res) => res.json())
        .then((data) => setItems(data));
    }, []);

  
    return [items, setItems]
};

export default useItems;