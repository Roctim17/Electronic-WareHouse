
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Component/About/About';
import AddProduct from './Component/AddProduct/AddProduct';
import Blog from './Component/Blog/Blog';
import Footer from './Component/Footer/Footer';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';
import ManageProduct from './Component/ManageProduct/ManageProduct';
import NotFound from './Component/NotFound/NotFound';
import Signup from './Component/Signup/Signup';
import { Toaster } from 'react-hot-toast';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Toaster></Toaster>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/addproduct' element={<AddProduct></AddProduct>}></Route>
        <Route path='/manage' element={<ManageProduct></ManageProduct>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
