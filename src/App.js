
import { Route, Routes } from 'react-router-dom';
import './App.css';
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
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
