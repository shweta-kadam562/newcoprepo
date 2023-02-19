import { Component } from "react";
import { store } from "./store"
import { Route, Routes } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from "react-redux";
import Restaurant from "./components/Restaurant";
import Menu from "./components/Menu";
import './App.css';
import NavBar from "./components/navbar";
import SignUp from "./components/SignUp";
import { Login } from "./components/auth/login";

export default class App extends Component {
   /* Which function does react call:render() */
   render() { /*render must return something(jsx) */
      return (

         <div>
            <Provider store={store}>

               <NavBar />

               <Routes>
                  <Route path="/" element={<Login />} />
                  <Route path="/restaurant" element={<Restaurant />} />
                  <Route path="/menu" element={<Menu />} />
                  <Route path="/sign-up" element={<SignUp />} />

               </Routes>

            </Provider>
         </div>);
   }
}




