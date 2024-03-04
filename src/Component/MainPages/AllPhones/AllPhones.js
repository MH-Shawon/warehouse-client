import React from 'react';
import useItems from '../../Hooks/useItems';
import Item from '../Item/Item';

const AllPhones = () => {
    const [items] = useItems();
    return (
        <div id='items'>
      <h1 className="text-center text-white bg-info w-50 mx-auto p-2 m-2 rounded">
          My Items : {items.length}
        </h1>
      <div className='row row-cols-1 row-cols-md-3 w-100'>
        {
          items.map(item => <Item
            key={item._id}
            item={item}
          ></Item>)
        }
      </div>

    </div>
    );
};

export default AllPhones;