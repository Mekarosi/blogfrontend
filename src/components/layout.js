import React from 'react';
export default function Layout(props) {
  return (
    <div>
      <nav className='nav'>
        <h4>
          <a className='logo' href='/'>
            {' '}
            Universal Chess Blog
          </a>
        </h4>

        <div className='navItems'>
          <ul>
            <li>
              <a href='/'>Homepage</a>
            </li>
            <li>
              <a href='/signup'>Signup</a>
            </li>
            <li>
              <a href='/login'>Login</a>
            </li>
            <li>
              <a href='/publishpost'>Publishpost</a>
            </li>
            <li>
              <a href='/blog'>Blog</a>
            </li>
          </ul>
        </div>
      </nav>
      {props.children}
    </div>
  );
}
