import React, { Component } from 'react';
import '../test.css'

class State extends Component {
    state = { 
        name:'Renyel Jay',
        lastname: 'Sioc',
        section: 'BSIT-NS-3A',
        block: 'block 156',
        lot: 'lot 17',
        town: 'Central Bicutan',
        address: 'Arago street',
        city: 'Taguig City'
     } 

     style = {
        fontSize: 20,
        fontWeight: "bold"
     }

     style2 = {
        fontSize: 15,
        fontWeight: "bold"
     }
    render() { 
        return (
            <React.Fragment>
            <div className='background'>
            <h3>Hello Im {this.state.name} {this.state.lastname}</h3>
            <p style={this.style2}>Im a 3rd Year BSIT Student from {this.state.section}</p>
            <p style={this.style2}>My Address is {this.state.block} {this.state.lot}, {this.state.address}, {this.state.town} {this.state.city}</p>
            <span style={this.style} className='badge badge-primary m-2'>Test Span</span>
            <button className='btn btn-success m-2'>Testing Buttons</button>
            </div>
            </React.Fragment>
        );
    }
}
 
export default State;