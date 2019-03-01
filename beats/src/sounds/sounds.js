import React from 'react';
import { FaPlusSquare, FaMinusSquare } from 'react-icons/fa';

import NavContainer from '../nav/nav.js';
import './sounds.css';


class SoundsContainer extends React.Component {
    render() {
        return (
            <div className="sounds_container">
                {this.renderMinusSquare()}
                {this.renderSoundCardContainer()}
                {this.renderPlusSquare()}
                {this.renderNavContainer()}
            </div>
        );
    }
    renderMinusSquare() {
        const { rows } = this.props
        if (Object.keys(rows).length > 0) {
            return (
                <FaMinusSquare className="minus_card"/>
            );
        }
    }
    renderSoundCardContainer() {
        const { rows } = this.props
        if (Object.keys(rows).length > 0) {
            return (
                <SoundCardContainer key="sound_card_container" rows={rows}/>
            );
        }
    }

    renderNavContainer() {
        const { incrementNoteValue, decrementNoteValue } = this.props
        const { noteValue } = this.props.state
        return (
            <NavContainer key="nav_container"
                noteValue={noteValue}
                incrementNoteValue={incrementNoteValue}
                decrementNoteValue={decrementNoteValue}
            />
        );
    }

    renderPlusSquare() {
        return (
            <FaPlusSquare className="add_card"
                label="new_card"
                onClick={(event) => {this.addNewSoundCard(event)}}
            />
        );
    }

    addNewSoundCard(event) {
        const { openModal } = this.props
        const { modalLabels } = this.props.state
        const { currentTarget } = event
        modalLabels.length = 0
        modalLabels.push(currentTarget.getAttribute("label"))
        return openModal()
    }
}

class SoundCardContainer extends React.Component {
    render() {
        const rows = Object.keys(this.props.rows).map((row, index) => {
            return <SoundRow cards={this.props.rows[row]} key={row} row={row}/>
        })
        return (
            <div className="sound_card_container">
                {rows}
            </div>
        );
    }
}

class SoundRow extends React.Component {
    render() {
        const cards = this.props.cards.map((card) => {
            return <SoundCard key={card} name={card}/>
        })
        return (
            <div className="sound_row" row={this.props.row}>
                {cards}
            </div>
        );
    }
}

class SoundCard extends React.Component {
    render() {
        return (
            <div className="sound_card" name={this.props.name}>
                {this.props.name}
            </div>
        );
    }
}

export default SoundsContainer;
