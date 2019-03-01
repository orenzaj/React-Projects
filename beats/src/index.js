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
        maxMeasures: 4,
        beatsPerMeasure: 4,
        maxBpm: 4,
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
        modalType: "",
        modalLabels: [],
        modalInputs: []
    }
    clearModalFields() {
        this.setState({ modalLabels: [] })
        this.setState({ modalInputs: [] })
    }
    closeModal = () => {
        this.clearModalFields()
        this.setState({ modalType: "" })
    }
    openModal = () => {
        this.setState({ modalType: "open" })
    }
    submitModalInputs = () => {
        const state = {}
        const {
            modalLabels,
            modalInputs,
            maxBpm,
        } = this.state
        if (modalLabels[0] === "new_bpm" && modalInputs[0] <= maxBpm) {
            state[modalLabels[0]] = modalInputs[0]
            this.setState(state)
            this.closeModal()
            this.incrementMeasureCount()
        } else if (modalLabels[0] === "new_title") {
            state["title"] = modalInputs[0]
            this.setState(state)
            this.closeModal()
        } else if (modalLabels[0] === "new_subtitle") {
            state["subtitle"] = modalInputs[0]
            this.setState(state)
            this.closeModal()
        } else if (modalLabels[0] === "new" || modalLabels[0] === "subtitle") {
            state[modalLabels[0]] = modalInputs[0]
            this.setState(state)
            this.closeModal()
        }
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
        if (this.state.measureCount <= this.state.maxMeasures) {
            this.setState({ measureCount: this.state.measureCount + 1 })
        }
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
    componentWillMount() {
        this.decrementNoteValue.bind(this)
        this.incrementNoteValue.bind(this)
        this.decrementMeasureCount.bind(this)
        this.incrementMeasureCount.bind(this)
        this.decrementSoundCardCount.bind(this)
        this.incrementSoundCardCount.bind(this)
        this.decrementSoundRowCount.bind(this)
        this.incrementSoundRowCount.bind(this)
        this.closeModal.bind(this)
        this.openModal.bind(this)
        this.submitModalInputs.bind(this)
    }
    render() {
        return React.createElement(
            'div',
            { className: "djim-beats-container" },
            <TitleContainer key="title_container"
                state={this.state}
                openModal={this.openModal}
            />,
            <BeatsContainer key="beats_container"
                state={this.state}
                decrementMeasureCount={this.decrementMeasureCount}
                incrementMeasureCount={this.incrementMeasureCount}
                openModal={this.openModal}
            />,
            <SoundsContainer key="sounds_container"
                state={this.state}
                rows={this.getSoundRows()}
                incrementNoteValue={this.incrementNoteValue}
                decrementNoteValue={this.decrementNoteValue}
                incrementSoundCardCount={this.incrementSoundCardCount}
                decrementSoundCardCount={this.decrementSoundCardCount}
                openModal={this.openModal}
            />,
            <ModalContainer key="modal_container"
                state={this.state}
                closeModal={this.closeModal}
                submitModalInputs={this.submitModalInputs}
            />
        );
    }
}

ReactDOM.render(
    <AppContainer/>,
    document.getElementById('root')
);
