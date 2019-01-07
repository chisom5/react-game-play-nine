import React, {Component} from 'react';

class StarFrame extends Component{
    
    render(){
        let starsDisplay =[],
        numberOfStars = this.props.numberOfStars;

        for(let i = 0; i<numberOfStars; i++){
            starsDisplay.push(
                <span className="fa fa-star" key={i}></span>
            )
        }

        return(
            <div id="star-frame">
                <div className="card card__height">
                <div className="card-body">
                        {starsDisplay}

                    </div>
                </div>
            </div>
        );
    }
}

export default StarFrame;