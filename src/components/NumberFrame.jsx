import React, {Component} from 'react';

class NumberFrame extends Component{
   
    render(){
        let numbers =[], className, 
        selectedNumbers= this.props.selectedNumbers,
        selectNumber = this.props.selectNumber,
        usedNumber= this.props.usedNumber;

        for(let i =0; i<= 9; i++){
            className = "number selected-" + (selectedNumbers.indexOf(i) >= 0);
            className += " used-" + (usedNumber.indexOf(i) >= 0);

            numbers.push(
                <div className={className} key={numbers} onClick={selectNumber.bind(null, i)}>{i}</div>
            )
        }

        return (
            <div id="number-frame">
                <div className="card" id="card-height">
                    <div className="card-body">
                        {numbers}
                    </div>
                </div>
            </div>
        );
    }
}
export default NumberFrame;