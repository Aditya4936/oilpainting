import { Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import Details from './component/Details/Details';
import Navbar from './component/Navbar';
import Footer from './component/Footer';

function App() {
  return (
    <>
    <Navbar/>
    <Routes >
      <Route path="/" element={<Home />} />
      <Route path='/details' element={<Details />} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;
