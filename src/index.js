import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ProductsProvider } from './context/products_context'
import { FilterProvider } from './context/filter_context'
import { CartProvider } from './context/cart_context'
import { UserProvider } from './context/user_context'
import { Auth0Provider } from '@auth0/auth0-react'

//dev-70aj57g3ry33703p.us.auth0.com  domain
//Ecn6T39vNEYrD4F2fcVEgnMBVgpr2gjk


ReactDOM.render(
    <Auth0Provider
    domain="dev-70aj57g3ry33703p.us.auth0.com"
    clientId="r15FtODurATUBduRVjX0rCvJH8YsSPbE"
    redirect_uri={ window.location.origin}
    // authorizationParams={{
    //     redirect_url: window.location.origin
    //   }}
    cacheLocation='localstorage'
  >
    <UserProvider>
        <ProductsProvider>
            <FilterProvider>
                <CartProvider>
                    <App />
                </CartProvider>
            </FilterProvider>
        </ProductsProvider>
    </UserProvider>
    
  </Auth0Provider>
  ,
        
        document.getElementById('root'))
