import React from 'react'

class AppState extends React.Component{
    decrementBeatRowCount() {
        this.setState({ beatRowCount: this.beatRowCount - 1 })
    }
    incrementBeatRowCount() {
        this.setState({ beatRowCount: this.beatRowCount + 1 })
    }
    decrementSoundCardCount() {
        this.setState({ soundCardCount: this.soundCardCount - 1 })
    }
    incrementSoundCardCount() {
        this.setState({ soundCardCount: this.soundCardCount + 1 })
    }
    decrementSoundRowCount() {
        this.setState({ soundRowCount: this.soundRowCount - 1 })
    }
    incrementSoundRowCount() {
        this.setState({ soundRowCount: this.soundRowCount + 1 })
    }
}

const appState = new AppState()
export default appState;
