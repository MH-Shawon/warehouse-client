
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Component/SharedPages/Footer/Footer';
import Header from './Component/SharedPages/Header/Header';
import NotFound from './Component/SharedPages/NotFound/NotFound';



function App() {
  return (
    <div className="App">
      <Header></Header>
      <h3>Welcodme to my WareHouse</h3>
      <Routes>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    <Footer></Footer>
    </div>
  );
}

export default App;
