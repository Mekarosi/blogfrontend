import React from 'react';
import { BrowserRouter as R, Route } from 'react-router-dom';
import Signup from '../components/auth/signup';
import Loginform from '../components/auth/loginform';

// import Blog from '../Components/blog';
// import Publishpost from '../Components/publishpost';
// import Join from '../Components/join';
const Router = () => {
  return (
    <div>
      <R>
        {/* <Route path='/join' component={Join}></Route> */}
        {/* <Route path='/blog' component={Blog}></Route> */}
        <Route path='/login' component={Loginform}></Route>
        <Route path='/signup' component={Signup}></Route>
        {/* <Route path='/publishpost' component={Publishpost}></Route> */}
      </R>
    </div>
  );
};
export default Router;
