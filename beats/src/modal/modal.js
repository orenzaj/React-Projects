import React from 'react';
import ReactDOM from 'react-dom';

import './modal.css';

class ModalContainer extends React.Component {
    render() {
        console.log(this.props)
        return (
            <div className="modal_container">
                {this.renderModalType()}
            </div>
        )
    }
    renderModalType() {
        if (this.props.modalType === "edit_title") {
            return (
                <input type="text" value={this.props.state.title}
                    onChange={this.props.actions.changeTitle}
                />
            );
        }
    }
}

export default ModalContainer;
