import React from 'react'
import { BrowserRouter as R, Route } from "react-router-dom";
import Loginform from './auth/loginform'
import Signup from './auth/signup'
import Blog from './blog'


const CustomRouter = () => {
   return (
       <R>
           {/* /<Route path='/' component={}></Route> */}
           <Route path='/login/' component={Loginform}></Route>
           <Route path='/signup/' component={Signup}></Route>
           <Route path='/blog/' component= {Blog}></Route>

       </R>
   )
}

export default CustomRouter