import React from 'react';

import './nav.css';

class NavContainer extends React.Component {
    render() {
        return (
            <div className="nav_container">
                <NavButton id="dec" handleClick={ this.props.decrementNoteValue } direction="<"/>
                <NavNumber key="note_value" noteValue={ this.props.noteValue }/>
                <NavButton id="inc" handleClick={ this.props.incrementNoteValue } direction=">"/>
            </div>
        );
    }
}

class NavNumber extends React.Component {
    render() {
        return (
            <div className="nav_number">
                {this.props.noteValue}
            </div>
        );
    }
}

class NavButton extends React.Component {
    render() {
        return React.createElement(
            'button', {
                className: "nav_button",
                id: this.props.id,
                onClick: this.props.handleClick
            }, this.props.direction
        );
    }
}

export default NavContainer;
