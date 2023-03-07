import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components' 
import {ErrorPage, HomePage, AboutPage,CartPage,ProductsPage,SingleProductPage,CheckoutPage,privateRoute}  from './pages'

function App() {
  return (
    <Router>
        <Navbar/>
        <Sidebar/>
          <Switch>
              <Route path="/" exact>
                <HomePage/>
              </Route>
                       
              <Route path='/about'>
                <AboutPage/>
              </Route>

              <Route path='/cart'>
                <CartPage/>
              </Route>

              <Route path='/products/:id'>
                <ProductsPage/>
              </Route>

              <Route path='/products/' children={<SingleProductPage/>}/>
            
              <privateRoute exact path='/checkout'>
                <CheckoutPage/>
              </privateRoute>

              <Route path='*' >
                <ErrorPage/>
              </Route>

          </Switch>
        <Footer/>
    </Router>
  )
}

export default App
