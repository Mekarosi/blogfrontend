import React from 'react'
import { BrowserRouter as R, Route } from "react-router-dom";
import Loginform from './auth/loginform'
import Signup from './auth/signup'
import Blog from './blog'
import Publishpost from './publishpost'
import Join from './join'



const CustomRouter = () => {
   return (
       <R>
          <Route path= '/join/' component= {Join}></Route> 
          <Route path='/' exact component= {Blog}></Route>
           <Route path='/login/' component={Loginform}></Route>
           <Route path='/signup/' component={Signup}></Route>
           {/* <Route path='/signup' component={Signout}></Route> */}
           <Route path='/publishpost' component={Publishpost}></Route>

       </R>
   )
}

export default CustomRouter