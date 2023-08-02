import { useEffect } from 'react';
import React from 'react'
import "./App.css";
import { BrowserRouter ,Routes,Route} from 'react-router-dom';
import { LoginPage,SignupPage ,ActivationPage,HomePage,ProductsPage,BestSellingPage,EventsPage,FAQPage} from './Routes.js';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import axios from 'axios';
// import { server } from './server';
import { loadUser } from './redux/actions/user';
import Store from './redux/store';
import { useSelector } from 'react-redux';
// import { useEffect } from 'react';
// import axios from 'axios';
// import { server } from './server';

function App() {
  const {loading}=useSelector((state)=>state.user);

 useEffect(() => {
 Store.dispatch(loadUser())
 }, [])
 
  return (
    <>
    {
      loading ?(
        null
      ):(
        <div>
      <BrowserRouter>
      <Routes>
       < Route path="/" element={<HomePage/>}/>
       < Route path="/login" element={<LoginPage/>}/>
       < Route path="/sign-up" element={<SignupPage/>}/>
       < Route path="/activation/:activation_token" element={<ActivationPage/>}/>
       <Route path='/products' element={<ProductsPage/>}/>
       <Route path='/best-selling' element={<BestSellingPage/>}/>
       <Route path='/events' element={<EventsPage/>}/>
       <Route path='/faq' element={<FAQPage/>}/>
      </Routes>
      <ToastContainer
position="bottom-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
/>
      </BrowserRouter>
     

    </div>
      )
    }
    </>
  )
}

export default App;


