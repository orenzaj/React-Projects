import React from 'react';
import { FaPlusSquare, FaMinusSquare } from 'react-icons/fa';

import './beats.css'

class BeatsContainer extends React.Component {
    render() {
        return (
            <div className="beats_container">
                {this.renderMinusSquare()}
                {this.renderRowContainer()}
                {this.renderPlusSquare()}
            </div>
        );
    }
    renderMinusSquare() {
        if (this.props.measures > 0) {
            return (
                <FaMinusSquare className="minus_row"
                    onClick={this.props.decrementMeasureCount}
                />
            );
        }
    }
    renderRowContainer() {
        if (this.props.measures > 0){
            return (
                <BeatRowContainer key="beat_row_container"
                    bpm={this.props.bpm}
                    measures={this.props.measures}
                />
            );
        }
    }
    renderPlusSquare() {
        return (
            <FaPlusSquare className="add_row"
                onClick={this.props.incrementMeasureCount}
            />
        );
    }
}

class BeatRowContainer extends React.Component {
    render() {
        return (
            React.createElement(
                'div', { className: "beat_row_container" },
                this.renderRows()
            )
        );
    }
    renderRows() {
        const rows = []
        for (let row = 1; row <= this.props.measures; row += 1) {
            rows.push(
                <BeatRow key={row} row={row} bpm={this.props.bpm}/>
            )
        }
        return rows
    }
}

class BeatRow extends React.Component {
    render() {
        return (
            <div className="beat_row" row={this.props.row}>
                {this.renderBoxes()}
            </div>
        );
    }
    renderBoxes() {
        const boxes = []
        for (let box = 1; box <= this.props.bpm; box += 1) {
            boxes.push(<BeatBox key={box} box={box}/>)
        }
        return boxes
    }
}

class BeatBox extends React.Component {
    render() {
        return (
            <div className="beat_box" box={this.props.box}>
                {this.props.box}
            </div>
        );
    }
}

export default BeatsContainer;