import React from 'react';
import  ReactDOM  from 'react-dom/client';
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'
import { createBrowserRouter , RouterProvider, Outlet} from 'react-router-dom';
import About from './components/About';
import Error from './components/Error'
import RestaurantDetails from './components/RestaurantDetails'
import Profile from './components/Profile'
import ProfileClass from './components/ProfileClass'
import AboutClass from './components/AboutClass';

console.log(React)
const Applayout=()=>{
    return (
        <>  
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    );
}

const appRouter=createBrowserRouter([
    {
        path:'/',
        element:<Applayout/>,
        errorElement:<Error/>,
        children:[
            {
                path:'/',
                element:<Body/>
            },
            {
                path:'/about',
                // element:<About/>,
                element:<AboutClass/>,
                children:[
                    {
                        path:'profile',
                        // element:<Profile/>
                        element:<ProfileClass/>
                    }
                ]
            },
            {
                path:'/restaurant/:id',
                element:<RestaurantDetails/>
            }
        ]
    }
   
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);