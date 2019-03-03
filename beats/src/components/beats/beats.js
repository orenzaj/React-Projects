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
        const { measureCount } = this.props.state
        const { decrementMeasureCount } = this.props
        if (measureCount > 0) {
            return (
                <FaMinusSquare className="remove_measure"
                    id="remove_measure"
                    onClick={decrementMeasureCount}
                />
            );
        }
    }
    renderRowContainer() {
        const { measureCount } = this.props.state
        if (measureCount > 0){
   	    return (
	        <div className="beat_row_container">
		    {this.renderRows(measureCount)}
	        </div>
	    )
        }
    }
    renderRows(measures) {
        const rows = []
        for (let row = 1; row <= measures; row += 1) {
	    rows.push(
		<div key={row} className="beat_row" row={row}>
		    {this.renderBoxes()}
		</div>
	    )
        }
        return rows
    }
    renderBoxes(row) {
        const { beatsPerMeasure } = this.props.state
        const boxes = []
        for (let box = 1; box <= beatsPerMeasure; box += 1) {
     	    boxes.push(
     	    	<div key={box} className="beat_box" box={box}>
		    {box}
     	    	</div>)
        }
        return boxes
    }
    renderPlusSquare() {
        const { measureCount, maxMeasures } = this.props.state
        if ( measureCount < maxMeasures ) {
            return (
                <FaPlusSquare className="add_measure"
                    id="add_measure"
                    onClick={(event) => {this.handleClick(event)}}
                />
            )
        }
    }
    handleClick(event) {
        const { measureCount, modalLabels } = this.props.state
        const { incrementMeasureCount, openModal } = this.props
        if (measureCount === 0) {
            modalLabels.length = 0
            modalLabels.push("Beats Per Measure")
            return openModal()
        }
        return incrementMeasureCount()
    }
}

export default BeatsContainer;
