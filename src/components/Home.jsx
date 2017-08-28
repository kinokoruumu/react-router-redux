import React from 'react';

export default class Home extends React.Component {

    constructor(props) {
        super(props);

        this.addCount = this.addCount.bind(this)
    }

    render(){
        return(
            <div>
                <h1>count: {this.props.count}</h1>
                <button onClick={this.addCount}>+1</button>
                <button onClick={() => this.props.show_about()}>show_about</button>
            </div>
        );
    }

    addCount() {
        const newCount = this.props.count + 1
        this.props.add_count(newCount)
    }

}