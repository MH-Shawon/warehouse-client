import React from 'react';
import { Link } from 'react-router-dom';
import useItems from '../../Hooks/useItems';

const Items = () => {
    const [items]=useItems();
    const newItem = items.slice(0,6);
    return (
        <div id='items'>
        <h1 className="text-center fw-bold text-white bg-info p-3">Laptop Items</h1>
        <div className='row row-cols-1 row-cols-md-3 w-100'>
        {
          newItem.map(item => <Item
          key={item._id}
          item={item}
          ></Item>)
        }
        </div>
        <div className='text-center'>
          <Link to='/manageitems'><button className='border-0 my-4 bg-success rounded text-white fw-bold p-2'>View All Items</button></Link>
        </div>
      </div>
    );
};

export default Items;