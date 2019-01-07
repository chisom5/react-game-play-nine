import React, {Component} from 'react';

class DoneFrame extends Component{
    render(){
        let show;
        show = (this.props.doneStatus)? "show" : "hide";
         
        return (
            <div className="modal-container">
                <div className="modal" id={show}>
                    <h4>Game Over</h4>
                    <p>{this.props.doneStatus}</p>
                    <button className="btn btn-lg btn-primary" onClick={this.props.playAgain}>Play Again</button>
                </div>
            </div>
        );
    }
}
export default DoneFrame;