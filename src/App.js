
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Component/Login/Login/Login';
import SignUp from './Component/Login/SignUp/SignUp';
import Animation from './Component/MainPages/Animation/Animation';
import Blogs from './Component/MainPages/Blogs/Blogs';
import Items from './Component/MainPages/Items/Items';
import NextShipment from './Component/MainPages/NextShipment/NextShipment';
import Footer from './Component/SharedPages/Footer/Footer';
import Header from './Component/SharedPages/Header/Header';
import NotFound from './Component/SharedPages/NotFound/NotFound';
import Home from './Home/Home';



function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/animation' element={<Animation></Animation>}></Route>
        <Route path='/upcoming' element={<NextShipment></NextShipment>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/inventory' element={<Items></Items>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>

      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
