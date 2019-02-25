import React from 'react';
import './title.css';

class TitleContainer extends React.Component {
    render() {
        return React.createElement(
            'div', { className: "title_container" },
            <TextBox type="h2" key={this.props.title} className="title" value={this.props.title}/>,
            <TextBox type="span" key={this.props.subtitle} className="subtitle" value={this.props.subtitle}/>
        );
    }
}

class TextBox extends React.Component {
    render() {
        return React.createElement(
            this.props.type, {
                className: this.props.className,
                value: this.props.value
            }, this.props.value
        );
    }
}

export default TitleContainer;
