import React from 'react';
import { FaEdit } from 'react-icons/fa';

import './title.css';

class TitleContainer extends React.Component {
    render() {
        const { openModal } = this.props
        const { title, subtitle } = this.props.state
        return (
            <div className="title_container">
                <TextBox
                    value={title}
                    tag="h2"
                    className="title"
                    label="New Title"
                    state={this.props.state}
                    handleClick={openModal}
                />
                <TextBox
                    value={subtitle}
                    tag="span"
                    className="subtitle"
                    label="New Subtitle"
                    state={this.props.state}
                    handleClick={openModal}
                />
            </div>
        );
    }
}

class TextBox extends React.Component {
    render() {
        const { tag, className, state } = this.props
        return React.createElement(
            tag, { className },
            state[className],
            this.renderEditButton()
        );
    }
    renderEditButton() {
        const { label } = this.props
        return (
            <FaEdit
                className="edit_button"
                type="open"
                label={label}
                onClick={(event) => { this.setLabels(event) }}
            />
        );
    }
    setLabels(event) {
        const { handleClick } = this.props
        const { modalLabels } = this.props.state
        const { currentTarget } = event
        modalLabels.length = 0
        modalLabels.push(currentTarget.getAttribute("label"))
        return handleClick()
    }
}

export default TitleContainer;
