import logo from './logo.svg';
import './App.css';
import ListCustumer from './ListCustumer';
import ListOfUsers from './ListOfUsers';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './Dashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Headers from './Headers';
import NoMatchFound from './NoMatchFound';
import NavBar from './NavBar';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import PageNotFound from './PageNotFound';
import ProductDetails from './ProductDetails';
import Home from './Home';
import Register from './Register';

function App() {
  return (
    <div className="App">
  
      <BrowserRouter>
      <Headers></Headers>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/aboutus" element={<AboutUs></AboutUs>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
      </Routes>
      </BrowserRouter>

      {/* <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/list" element={<ListCustumer />}></Route>
          <Route path="*" element={<NoMatchFound />}></Route>
        </Routes>
      </BrowserRouter> */}


      {/* <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path='/' element={<Dashboard></Dashboard>}></Route>
          <Route exact path='/products' element={<ProductDetails></ProductDetails>}></Route>
          <Route exact path='/dashboard' element={<Dashboard></Dashboard>}></Route>
          <Route exact path='/contactus' element={<ContactUs></ContactUs>}></Route>
          <Route path='*' element={<PageNotFound></PageNotFound>}></Route>
          <Route></Route>
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
