import React from 'react';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';

import '../App.css';

class NavContainer extends React.Component {
    render() {
        return (
            <div className="nav_container">
		<FaArrowCircleLeft className="nav_button" id="dec"
		    onClick={ this.props.decrementNoteValue }/>
		<div className="nav_number">{this.props.noteValue}</div>
		<FaArrowCircleRight className="nav_button" id="inc"
		    onClick={ this.props.incrementNoteValue }/>
            </div>
        );
    }
}

export default NavContainer;
