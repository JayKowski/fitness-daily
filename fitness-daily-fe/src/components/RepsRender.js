import React from 'react';
import timeStamp from '../helpers/timeStamp.js';
import Category from './Category'; 

let clicked = false;

class RepsRender extends React.Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        const targ = e.target.className;
        let div;
        console.log(timeStamp());
        if(targ === 'workout-name') {
            div = e.target.parentElement.children[1]
            console.log(div);
            if(clicked === false) {
                div.style.display = 'block';
                clicked = true;
            } else {
                div.style.display = 'none';
                clicked = false;
            }
        }
    }

    render() {
        const {categoriesReducer} = this.props
        console.log(this.props)
        return ( 
            <div>
                <p>this is the add reps render page</p>
                <div onClick={this.handleClick} className="reps-categ-render-div">
                    {
                        categoriesReducer.map( c => (
                            <Category 
                                categ={c}
                                userData={this.props.userDataReducer}
                            />
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default RepsRender;