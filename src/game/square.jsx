import React from 'react'; 

class Square extends React.Component {
    constructor(props) {
        super(props);
        this.content = this.content.bind(this);
    }

    content() {
        if (!this.props.value || this.props.value === 1) return "<3";
        return this.props.value;
    }

    render () {
        return <li>{this.content()}</li>
    }
}

export default Square;