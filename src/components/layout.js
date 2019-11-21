import React from 'react';
export default function Layout(props) {
  return (
    <div>
      <nav className='nav'>
        <h1>
          <a href='/'> Amarablog</a>
        </h1>
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
      </nav>
      {props.children}
    </div>
  );
}
