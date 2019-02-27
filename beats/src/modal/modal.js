import React from 'react';

import './modal.css';

class ModalContainer extends React.Component {
    render() {
        if (this.props.modalType !== "open") {
            return <div className="modal_placeholder"></div>
        }
        return (
            <div key="modal_container" className="modal_container">
                {this.renderCloseButton()}
                {this.renderForm()}
            </div>
        )
    }
    renderCloseButton() {
        return <button type="close" onClick={ this.props.closeModal }> X </button>
    }
    renderForm() {
        return (
            <form className="modal_form"
                onSubmit={ (event) => this.submitModalInputs(event) }>
                <div className="form_group">
                    {this.renderFormGroup()}
                </div>
                <div className="button_group">
                    <button type="submit"> Submit </button>
                </div>
            </form>
        )
    }
    renderFormGroup() {
        const groups = []
        const { modalLabels, modalInputs } = this.props.state
        modalLabels.forEach(label => {
            groups.push(<ModalLabel key={label}_label label={label}/>)
            groups.push(<ModalInput key={label}_input label={label}
                inputs={modalInputs} value={this.props.state[label]}/>)
        })
        return groups
    }
    submitModalInputs(event) {
        event.preventDefault()
        return this.props.submitModalInputs()
    }
}

class ModalLabel extends React.Component {
    render() {
        return (
            <label className="modal_label"> {this.props.label} </label>
        )
    }
}

class ModalInput extends React.Component {
    render() {
        return (
            <input type="text "className="modal_label" id={ this.props.label }
                placeholder={ this.props.value }
                onChange={(event) => this.changeModalInputs(event)}
            />
        )
    }
    changeModalInputs(event) {
        const { value } = event.target
        const { inputs } = this.props
        inputs.length = 0
        inputs.push(value)
    }
}

export default ModalContainer;
