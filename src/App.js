
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Component/About/About';
import Blog from './Component/Blog/Blog';
import Footer from './Component/Footer/Footer';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import NotFound from './Component/NotFound/NotFound';
import Signin from './Component/Signin/Signin';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/signin' element={<Signin></Signin>}></Route>
        <Route path='/*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
