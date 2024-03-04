
import { Link, useParams } from 'react-router-dom';
import useOrderDetail from '../../Hooks/useOrder';


const ItemDetails = () => {

    const { phoneId } = useParams();
     const [phones] = useOrderDetail(phoneId)
  



    return (
        <div className="m-3 p-3 text-start">
      <div className="d-flex p-2">
        <div className="card w-50 mx-auto  shadow-lg border-0 p-3">
          <h1 className="text-center text-danger mb-5">Item Details</h1>
          <div className="d-flex">
            <div>
              <img
                src={phones.img}
                height={200}
                className="card-img-top w-100 mx-auto"
                alt="..."
              />
            </div>
            <div className="p-3">
              <h4 className="card-title">Brand: {phones.name}</h4>
              <h4>Price: ${phones.price}</h4>
              <h6 className="card-title">Supplier: {phones.supplierName}</h6>
              <h4 className="fw-bold text-primary">Quantity: {phones.quantity}</h4>
            </div>
          </div>
          <div className="card-body text-center">
            <p className="card-text">{phones.description}</p>

            <Link to={`/placeorder/${phoneId}`}>

            <button className="btn btn-primary mt-3"
            >
             Place Order
            </button>
            
            </Link>
            
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default ItemDetails;