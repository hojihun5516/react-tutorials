import React from 'react';
import ReactDOM from 'react-dom';

class RandomNumber extends React.Component {

    constructor(props){
        super(props);
        this._update = function(){
            console.log("FUCK THAT");
            console.log(this.props.number);
        };
    }


    render(){
        return (
            <div>
                <h1>RANDOM NUMBER: { this.props.number }</h1>
                <button onClick={this._update}>Randomize</button>
            </div>
        );
    }
}

export default RandomNumber;
