import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import M_navbar from "./components/navbars/m_navbar.component";
import AddProducts from "./components/manager_components/addProducts";
import ProductList from "./components/manager_components/productList";
import EditProducts from "./components/manager_components/editProducts";
import UserProdcutList from "./components/user_component/userProdcutList";


function App() {
  return (
      <Router>
        <div className="container">
            <M_navbar/>
            <br/>
            <Route path={"/"} exact component={UserProdcutList} />
            <Route path={"/manager"} component={ProductList} />
            <Route path={"/create"} component={AddProducts} />
            <Route path={"/edit/:id"} component={EditProducts}/>
        </div>
      </Router>
  );
}

export default App;
