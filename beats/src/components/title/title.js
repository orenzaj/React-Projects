import React, { Component } from 'react';
import { FaEdit } from 'react-icons/fa';

import '../App.css';

class TitleContainer extends Component {
    render() {
        const { title, subtitle } = this.props.state
        return (
	    <div className="title_container">
	        <h2 className="title"> {title}
	            <FaEdit className="edit_button" type="open" label="New Title"
			    onClick={(event) => { this.setLabels(event) }} />
		</h2>
		<span className="subtitle"> {subtitle}
		    <FaEdit className="edit_button" type="open" label="New Title"
			    onClick={(event) => { this.setLabels(event) }} />
		</span>
	    </div>
        );
    }
    setLabels(event) {
        const { openModal } = this.props
        const { modalLabels } = this.props.state
        const { currentTarget } = event
        modalLabels.length = 0
        modalLabels.push(currentTarget.getAttribute("label"))
        return openModal()
    }
}

export default TitleContainer;
