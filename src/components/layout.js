import React from 'react'

export default function Layout(props) {
    return (
        <div>

            <nav className='nav'>
                <h1><a href='/'>Universal Chess blog</a></h1>

                {!localStorage.getItem('user') && <ul>
                    <li><a href='/login'>Login</a></li>
                    <li><a href='/signup'>Signup</a></li>
                    <li><a href='/blog'>Blog</a></li>
                </ul>}


                {localStorage.getItem('user') &&   <ul>
                    <li><a href='/blog'>Blog</a></li>
                    <li><a href='/publishpost'>Publishpost</a></li>
                    <li><a href='/login'>Signout</a></li>
                </ul>}
            </nav>
            {props.children}

        </div>
    )
}
