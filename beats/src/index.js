import React from 'react';
import ReactDOM from 'react-dom';

import BeatsContainer from './beats/beats.js';
import SoundsContainer from './sounds/sounds.js';
import TitleContainer from './title/title.js';
import ModalContainer from './modal/modal.js';

import './index.css';
class AppContainer extends React.Component {
    state = {
        measureCount: 1,
        beatsPerMeasure: 4,
        soundRowCount: 1,
        soundCardCount: 0,
        maxCards: 6,
        noteValue: 1,
        maxValue: 4,
        maxRows: 4,
        title: "Tue tue",
        subtitle: "From Ghana",
        noteValues: {
            1: ["drum", "shekere", "Ghana"],
            2: ["Tubano"]
        },
        modalType: "edit_title"
    }
    getSoundRows = () => {
        const soundRows = {}
        const cards = this.getSoundCards()
        cards.forEach((card, index) => {
            const rowNum = Math.ceil((index + 1) / this.state.maxCards)
            if (!soundRows[rowNum]) {
                soundRows[rowNum] = []
            }
            soundRows[rowNum].push(card)
        })
        return soundRows
    }
    getSoundCards = () => {
        return this.state.noteValues[this.state.noteValue]
            ? this.state.noteValues[this.state.noteValue] : []
    }
    decrementNoteValue = () => {
        const noteValue = this.state.noteValue === 1
            ? this.state.maxValue : this.state.noteValue - 1
        this.setState({ noteValue })
    }
    incrementNoteValue = () => {
        const noteValue = this.state.noteValue === this.state.maxValue
            ? 1 : this.state.noteValue + 1
        this.setState({ noteValue })
    }
    decrementMeasureCount = () => {
        this.setState({ measureCount: this.state.measureCount - 1 })
    }
    incrementMeasureCount = () => {
        this.setState({ measureCount: this.state.measureCount + 1 })
    }
    decrementSoundCardCount = () => {
        this.setState({ soundCardCount: this.state.soundCardCount - 1 })
    }
    incrementSoundCardCount = () => {
        this.setState({ soundCardCount: this.state.soundCardCount + 1 })
    }
    decrementSoundRowCount = () => {
        this.setState({ soundRowCount: this.state.soundRowCount - 1 })
    }
    incrementSoundRowCount = () => {
        this.setState({ soundRowCount: this.state.soundRowCount + 1 })
    }
    actions = {
        "changeTitle": (title) => {
            this.setState({ title })
        }
    }
    componentWillMount() {
        this.decrementNoteValue.bind(this)
        this.incrementNoteValue.bind(this)
        this.decrementMeasureCount.bind(this)
        this.incrementMeasureCount.bind(this)
        this.decrementSoundCardCount.bind(this)
        this.incrementSoundCardCount.bind(this)
        this.decrementSoundRowCount.bind(this)
        this.incrementSoundRowCount.bind(this)
        this.actions.changeTitle.bind(this)
    }
    render() {
        return React.createElement(
            'div',
            { className: "djim-beats-container" },
            <TitleContainer key="title_container"
                title={this.state.title}
                subtitle={this.state.subtitle}
            />,
            <BeatsContainer key="beats_container"
                measures={this.state.measureCount}
                bpm={this.state.beatsPerMeasure}
                decrementMeasureCount={this.decrementMeasureCount}
                incrementMeasureCount={this.incrementMeasureCount}
            />,
            <SoundsContainer key="sounds_container"
                noteValue={this.state.noteValue}
                incrementNoteValue={this.incrementNoteValue}
                decrementNoteValue={this.decrementNoteValue}
                rows={this.getSoundRows()}
                incrementSoundCardCount={this.incrementSoundCardCount}
                decrementSoundCardCount={this.decrementSoundCardCount}
            />,
            <ModalContainer key="modal_container"
                modalType={this.state.modalType}
                state={this.state}
                actions={this.actions}
            />
        );
    }
}

ReactDOM.render(
    <AppContainer/>,
    document.getElementById('root')
);
