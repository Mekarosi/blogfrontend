import React from 'react';
///import logo from './logo.svg';
import './App.css';
import Loginform from './components/auth/loginform';
import CustomRouter from './components/router';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
// import Signup from './components/auth/signup';


function App(){
  return(
    <div className="App">
      <CustomRouter></CustomRouter>
      {/*<Loginform></Loginform>*/}
       {/* <Signup></Signup>  */}

       </div>
  )
}


export default App;
