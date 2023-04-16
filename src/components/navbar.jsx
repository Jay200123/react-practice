import React, {Component} from 'react';
import '../test.css';

class Navbar extends Component {
    // state = {  } 
    render() { 
        return (
        <body>
            <nav className='navbar'>
                <ul>
                    <li className='li-right'><a href='/'>Home</a></li>
                    <li className='li-right'><a href='/'>About</a></li>
                    <li className='li-right'><a href='/'>Contact Us</a></li>
                </ul>
            </nav>
        </body>
        );
    }
}
 
export default Navbar;