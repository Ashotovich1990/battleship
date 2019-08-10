import React from 'react'; 

class Square extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return <li>{this.props.value}</li>
    }
}

export default Square;