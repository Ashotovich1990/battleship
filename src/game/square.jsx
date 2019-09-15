import React from 'react'; 

class Square extends React.Component {
    constructor(props) {
        super(props);
        this.content = this.content.bind(this);
    }

    content() {
        if (this.props.value === 2) return "X";
        if (this.props.value === 3) return "(Y)";
        // if (this.props.value === 5) return "PPP";
        return "O";
    }

    render () {
        return <li>{this.content()}</li>
    }
}

export default Square;