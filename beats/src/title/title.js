import React from 'react';
import { FaEdit } from 'react-icons/fa';

import './title.css';

class TitleContainer extends React.Component {
    render() {
        const { state, openModal } = this.props
        return (
            <div className="title_container">
                <TextBox key={state.title}
                    tag="h2"
                    className="title"
                    state={state}
                    handleClick={openModal}
                />
                <TextBox key={state.subtitle}
                    tag="span"
                    className="subtitle"
                    state={state}
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
        return React.createElement(
            FaEdit, {
                className: "edit_button",
                type: "open",
                onClick: () => this.setLabels()
            }
        )
    }
    setLabels() {
        const { className, handleClick } = this.props
        const { modalLabels } = this.props.state
        modalLabels.length = 0
        modalLabels.push(className)
        return handleClick()
    }
}

export default TitleContainer;
