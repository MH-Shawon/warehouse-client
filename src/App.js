

import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Component/Login/Login/Login';
import SignUp from './Component/Login/SignUp/SignUp';
import SocialLogin from './Component/Login/SocialLogin/SocialLogin';
import RequiredAuth from './Component/Login/RquiredAuth/RequiredAuth';
import Animation from './Component/MainPages/Animation/Animation';
import Blogs from './Component/MainPages/Blogs/Blogs';
import Items from './Component/MainPages/Items/Items';
import NextShipment from './Component/MainPages/NextShipment/NextShipment';
import Footer from './Component/SharedPages/Footer/Footer';
import Header from './Component/SharedPages/Header/Header';
import NotFound from './Component/SharedPages/NotFound/NotFound';
import Home from './Home/Home';
import AddItem from './Component/MainPages/AddItem/AddItem';
import { ToastContainer } from 'react-toastify';
import ItemDetails from './Component/MainPages/ItemsDetails/ItemDetails';
import ManageItems from './Component/MainPages/ManageItems/ManageItems';
import Cart from './Component/MainPages/Cart/Cart'
import AllPhones from './Component/MainPages/AllPhones/AllPhones';
import PlaceOrder from './Component/PlaceOrder/PlaceOrder';



function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/animation' element={<Animation></Animation>}></Route>
        <Route path='/upcoming' element={<NextShipment></NextShipment>}></Route>

        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/phones' element={<Items></Items>}></Route>

        <Route path='/allphones' element={<AllPhones></AllPhones>}></Route>

        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/social' element={<SocialLogin></SocialLogin>}></Route>
        <Route
          path="/phones/:phoneId"element={<ItemDetails></ItemDetails>}
        ></Route>
        <Route
          path="/placeorder/:phoneId"
          element={
            <RequiredAuth>
              <PlaceOrder></PlaceOrder>
            </RequiredAuth>
          }
        ></Route>

        <Route
          path="/additem"
          element={
            <RequiredAuth>
              <AddItem></AddItem>
            </RequiredAuth>
          }
        ></Route>
        <Route
          path="/manageitems"
          element={
            <RequiredAuth>
              <ManageItems></ManageItems>
            </RequiredAuth>
          }
        ></Route>
        <Route
          path="/ordercart"
          element={
            <RequiredAuth>
              <Cart></Cart>
            </RequiredAuth>
          }
        ></Route>

        <Route path='*' element={<NotFound></NotFound>}></Route>

      </Routes>
      
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
