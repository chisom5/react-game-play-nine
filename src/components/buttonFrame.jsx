import React, {Component} from 'react';

class ButtonFrame extends Component{
    render(){
        let disabled, button, correct = this.props.correct;
       
        switch (correct) {
            case true:
                button =(
                    <button className="btn btn-success btn-lg" onClick={this.props.acceptAnswer}>
                        <span className="fa fa-check"></span>
                    </button> 
                );            
              break;

            case false:
                button =(
                    <button className="btn btn-danger btn-lg" >
                        <span className="fa fa-times"></span>
                    </button> 
                );
                break;

            default:
                disabled = (this.props.selectedNumbers.length === 0);
                button =(
                    <button className="btn btn-primary btn-lg" disabled ={disabled}
                    onClick={this.props.checkAnswer}>=</button> 
                );
        }

        return(
            <div id="button-frame">
                {button}
                <br /><br />

                <button className="btn btn-warning btn-xs" onClick={this.props.redraw}
                    disabled={this.props.redraws === 0}>
                    <span className="fa fa-refresh"></span>
                    &nbsp; 
                    {this.props.redraws}
                </button>
            </div>
        );
    }
}

export default ButtonFrame;