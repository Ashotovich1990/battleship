import React from 'react'; 

class Square extends React.Component {
    constructor(props) {
        super(props);
        this.content = this.content.bind(this);
        this.state = {style: "hidden"}
    }

    content() {
        if (this.props.player) {
            if (this.props.value === 5) return <div className="ship"><i class="fas fa-ship"/></div>;
        }
        if (this.props.value === 3) return <div className="ship"><i class="fas fa-ship"/></div>;
        if (this.props.value === 2) return <div className="ship">{"X"}</div>;
    }; 

    componentDidUpdate(prevProps) {
        if (prevProps.value !== this.props.value) {
            if (this.props.value === 2) this.setState({style: "missed"});
            if (this.props.value === 3) this.setState({style: "strike"});
        };
    }

    render () {
        return <li className={this.state.style}>{this.content()}</li>
    };
};

export default Square;