import React, { Component } from 'react';

import BeatsContainer from './beats/beats.js';
import SoundsContainer from './sounds/sounds.js';
import TitleContainer from './title/title.js';
import ModalContainer from './modal/modal.js';

class AppContainer extends Component {
    state = this.initializeState()
    initializeState() {
	const initState = {
            measureCount: 0,
            maxMeasures: 3,
            beatsPerMeasure: 4,
            maxBpm: 4,
            soundRowCount: 1,
            soundCardCount: 0,
            maxCards: 5,
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
            modalInputs: [],
	}
        return initState
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
        const rows = this.getSoundCards()
        const {
            modalLabels,
            modalInputs,
            maxBpm,
            noteValue,
            noteValues
        } = this.state
        const [ label ] = modalLabels
        const [ input ] = modalInputs
        if (label === "Beats Per Measure" && input <= maxBpm) {
            state["beatsPerMeasure"] = input
            this.setState(state)
            this.closeModal()
            this.incrementMeasureCount()
        } else if (label === "New Title") {
            state["title"] = input
            this.setState(state)
            this.closeModal()
        } else if (label === "New Subtitle") {
            state["subtitle"] = input
            this.setState(state)
            this.closeModal()
        } else if (label === "Add Card"
                && rows.indexOf(input) === -1) {
            if (!noteValues[noteValue]) {
                noteValues[noteValue] = []
            }
            noteValues[noteValue].push(input)
            this.closeModal()
        } else if (label === "Remove Card" ) {
            const index = rows.indexOf(input)
            if (index > -1) {
                noteValues[noteValue].splice(index, 1)
                this.closeModal()
            }
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
        this.setState({ measureCount: this.state.measureCount + 1 })
    }
    componentWillMount() {
        this.decrementNoteValue.bind(this)
        this.incrementNoteValue.bind(this)
        this.decrementMeasureCount.bind(this)
        this.incrementMeasureCount.bind(this)
        this.closeModal.bind(this)
        this.openModal.bind(this)
        this.submitModalInputs.bind(this)
    }
    render() {
	return (
	    <div className="djim-beats-container">
                <TitleContainer key="title_container"
                    state={this.state}
                    openModal={this.openModal}
                />
                <BeatsContainer key="beats_container"
                    state={this.state}
                    decrementMeasureCount={this.decrementMeasureCount}
                    incrementMeasureCount={this.incrementMeasureCount}
                    openModal={this.openModal}
                />
                <SoundsContainer key="sounds_container"
                    state={this.state}
                    getSoundRows={this.getSoundRows}
                    getSoundCards={this.getSoundCards}
                    incrementNoteValue={this.incrementNoteValue}
                    decrementNoteValue={this.decrementNoteValue}
                    openModal={this.openModal}
                />
                <ModalContainer key="modal_container"
                    state={this.state}
                    closeModal={this.closeModal}
                    submitModalInputs={this.submitModalInputs}
                />
	    </div>
	)
    }
}

export default AppContainer;
