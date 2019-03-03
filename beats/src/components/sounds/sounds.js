import React from 'react';
import { FaPlusSquare, FaMinusSquare } from 'react-icons/fa';

import NavContainer from '../nav/nav.js';
import './sounds.css';


class SoundsContainer extends React.Component {
    render() {
        return (
            <div className="sounds_container">
                {this.renderNavContainer()}
                {this.renderMinusSquare()}
                {this.renderSoundCardContainer()}
                {this.renderPlusSquare()}
            </div>
        );
    }
    renderNavContainer() {
        const { incrementNoteValue, decrementNoteValue } = this.props
        const { noteValue } = this.props.state
        return (
            <NavContainer key="nav_container" noteValue={noteValue}
                incrementNoteValue={incrementNoteValue}
                decrementNoteValue={decrementNoteValue}
            />
        );
    }
    renderMinusSquare() {
        const cards = this.props.getSoundCards()
        if (cards.length > 0) {
            return (
                <FaMinusSquare className="remove_card"
                    label="Remove Card"
                    onClick={(event) => {this.handleClick(event)}}
                />
            );
        }
    }
    renderSoundCardContainer() {
        const cards = this.props.getSoundCards()
        if (cards.length > 0) {
            return (
	        <div className="sound_card_container">
		    {this.renderRows(cards)}
	        </div>
            );
        }
    }
    renderRows(cards) {
	const rows = this.props.getSoundRows()
	return Object.keys(rows).map((row, index) => {
	    return (
		<div className="sound_row" key={row} row={index}>
		    {this.renderCards(cards)}
		</div>
	    )
	})
    }
    renderCards(cards) {
	return cards.map((card, index) => {
	    return (
		<div className="sound_card" key={card} card={index}>
		    {card}
		</div>
	    )
	});
    }
    renderPlusSquare() {
        return (
            <FaPlusSquare className="add_card" label="Add Card"
                onClick={(event) => {this.handleClick(event)}}
            />
        );
    }
    handleClick(event) {
        const { openModal } = this.props
        const { modalLabels } = this.props.state
        const { currentTarget } = event
        modalLabels.length = 0
        modalLabels.push(currentTarget.getAttribute("label"))
        return openModal()
    }
}

export default SoundsContainer;
