import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import AboutPage from './components/AboutPage'

import TopViewedProductsPage from './components/TopViewedProductsPage'
import { Suspense, lazy } from 'react'
import Spinner from 'react-bootstrap/Spinner'
import Cart from './components/Cart';
import ColumnChart from './components/ColumChart';

const ProductsDetailsPage = lazy(() => import('./components/ProductsDetailsPage'))
const AddNewProductPage = lazy(() => import('./components/AddNewProductPage'))
const EditProductPage = lazy(() => import('./components/EditProductPage'))
const UserDetailsPage = lazy(() => import('./components/UserDetailsPage'))
const SignInPage = lazy(() => import('./components/SignInPage'))
const RegisterPage = lazy(() =>import('./components/RegisterPage'))
const ViewProductsPage = lazy(() => import('./components/ViewProductsPage'))

function App() {
  return (
    <Router>
          <div className="App">
            <Suspense fallback={
              <div>Please be patient while we're loading...
              </div>}>
              <Switch>
                <Route exact path="/" component={AboutPage} />
                <Route exact path="/signIn" component={SignInPage} />
                <Route path="/register" component={RegisterPage} />
                <Route path="/viewProducts" component={ViewProductsPage} />
                <Route path="/cart" component={Cart} />
                <Route path="/topViewedProducts" component={ColumnChart} />
                <Route path="/productDetails/:id" component={ProductsDetailsPage} />
                <Route path="/addNewProduct" component={AddNewProductPage} />
                <Route path="/editProduct/:id" component={EditProductPage} />
                <Route path="/userDetails/:id" component={UserDetailsPage} />
              </Switch>
            </Suspense>
          </div>
        </Router>
  );
}

export default App;
