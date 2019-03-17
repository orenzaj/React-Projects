import React from 'react';

import '../App.css';

class ModalContainer extends React.Component {
    render() {
        const { modalType } = this.props.state
        if (modalType !== "open") {
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
        const { closeModal } = this.props
        return <button type="close" onClick={ closeModal }> X </button>
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
        const { state } = this.props
        const { modalLabels, modalInputs } = state
        modalLabels.forEach(label => {
            groups.push(<ModalLabel key={label}
                    label={label}/>)
            groups.push(<ModalInput key={modalInputs}
                    label={label}
                    inputs={modalInputs}
                    value={state[label]}/>)
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
        const { label } = this.props
        return (
            <label className="modal_label"> {label} </label>
        )
    }
}

class ModalInput extends React.Component {
    render() {
        const { value, label } = this.props
        const id = label.toLowerCase().replace(" ", "_")
        return (
            <input type="text" className="modal_input" id={ id }
                placeholder={ value }
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
