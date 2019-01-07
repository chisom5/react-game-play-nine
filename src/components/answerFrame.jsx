import React, {Component} from 'react';

class AnswerFrame extends Component{
    render(){
        let result = this.props.selectedNumbers.map((i) =>{
            return (
            <span onClick={this.props.unSelectNumber.bind(null, i)} key={i}>{i}</span>
            );
        })
       
        return (
            <div id="answer-frame">
                <div className="card card__height">
                    <div className="card-body">
                        {result}
                    </div>
                </div>
            </div>
        );
    }
}
export default AnswerFrame;