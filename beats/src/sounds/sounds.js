import React from 'react';
import { FaPlusSquare, FaMinusSquare } from 'react-icons/fa';

import NavContainer from '../nav/nav.js';
import './sounds.css';


class SoundsContainer extends React.Component {
    render() {
        return (
            <div className="sounds_container">
                {this.renderMinusSquare()}
                {this.renderNavContainer()}
                {this.renderSoundCardContainer()}
                {this.renderPlusSquare()}
            </div>
        );
    }
    renderSoundCardContainer() {
        if (Object.keys(this.props.rows).length > 0) {
            return (
                <SoundCardContainer key="sound_card_container" rows={this.props.rows}/>
            );
        }
    }

    renderNavContainer() {
        return (
            <NavContainer key="nav_container" noteValue={this.props.noteValue}
                incrementNoteValue={this.props.incrementNoteValue}
                decrementNoteValue={this.props.decrementNoteValue}
            />
        );
    }
    renderMinusSquare() {
        if (Object.keys(this.props.rows).length > 0) {
            return (
                <FaMinusSquare className="minus_card"
                    onClick={this.props.decrementSoundCardCount}
                />
            );
        }
    }
    renderPlusSquare() {
        return (
            <FaPlusSquare className="add_card"
                onClick={this.props.incrementSoundCardCount}
            />
        );
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
