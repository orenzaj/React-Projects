import React from 'react';
import { FaEdit } from 'react-icons/fa';

import './title.css';

class TitleContainer extends React.Component {
    render() {
        const { openModal } = this.props
        const { title, subtitle } = this.props.state
        return (
            <div className="title_container">
                <TextBox key={title}_key
                    tag="h2"
                    className="title"
                    label="new_title"
                    state={this.props.state}
                    handleClick={openModal}
                />
                <TextBox key={subtitle}_key
                    tag="span"
                    className="subtitle"
                    label="new_subtitle"
                    state={this.props.state}
                    handleClick={openModal}
                />
            </div>
        );
    }
}

class TextBox extends React.Component {
    render() {
        const { tag, className } = this.props
        return React.createElement(
            tag, { className },
            this.props.state[className],
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
        console.log(this.props)
        const { handleClick } = this.props
        const { modalLabels } = this.props.state
        const { currentTarget } = event
        modalLabels.length = 0
        modalLabels.push(currentTarget.getAttribute("label"))
        return handleClick()
    }
}

export default TitleContainer;
