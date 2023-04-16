import React, { Component } from 'react';
import '../test.css';


class Content extends Component {
    // state = {  } 
    render() { 
        return (
            <div className='home-content'>
                <img className='profile' src='/images/profile.jpg' alt='profile.jpeg'/>
                <p>
                    <strong>Hello Im Renyel Jay Sioc From BSIT-NS-3A!. This is my first React App</strong>
                </p>
            </div>
        );
    }
}
 
export default Content;