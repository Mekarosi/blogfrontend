import React from 'react'
import { BrowserRouter as R, Route } from "react-router-dom";
import Loginform from './auth/loginform'
import Signup from './auth/signup'
import Blog from './blog'
import Publishpost from './publishpost'



const CustomRouter = () => {
   return (
       <R>
        
          <Route path='/' exact component= {Blog}></Route>
           <Route path='/login/' component={Loginform}></Route>
           <Route path='/signup/' component={Signup}></Route>
           <Route path='/publishpost' component={Publishpost}></Route>

       </R>
   )
}

export default CustomRouter