import React, { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import useItems from '../../Hooks/useItems';
import Item from '../Item/Item';

const MyItems = () => {
    
  const [items]=useItems();






    return (
      <div id='items'>
      <h1 className="text-center fw-bold text-white bg-info p-3">See All Items</h1>
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
    


export default MyItems;