import  { useEffect, useState } from 'react';

const useItems = () => {
    const [items, setItems] = useState([]);
  

    useEffect(() => {
      
      fetch("https://obscure-earth-30116.herokuapp.com/phones")
        .then((res) => res.json())
        .then((data) => setItems(data));
    }, []);

  
    return [items, setItems]
};

export default useItems;