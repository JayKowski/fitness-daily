import React from 'react';
import NewRep from '../containers/NewRep';

class WorkoutDisplay extends React.Component {
    // constructor() {
    //     super();
    //     this.handleClick = this.handleClick.bind(this);
    // }
    
    // handleClick(e) {
    //     let clicked = true;
    //     const targ = e.target.className;
    //     const div = document.querySelector('.new-rep-form')
    //     if(targ === 'workout-name') {
    //         if(clicked)
    //         console.log(targ, div);
    //         div.style.display = 'block';
    //         clicked = false;
    //     } else {
    //         div.style.display = 'none';
    //         clicked = true;
    //     }
    // }
    render() {
        if(this.props.displayBool){
            const { workout_name } = this.props.workout;
            return ( 
                <div>
                    <span>{workout_name}</span>
                </div>
            )
        } else {
            const { workout } = this.props;
            return (
                <div  className="add-rep-div">
                    <span className="workout-name" data-key={`${workout.id}`}>{workout.workout_name}</span>
                    <div className="new-rep-form" style={{'display': 'none'}}>
                        <NewRep
                            userData={this.props.userData} 
                        />
                    </div>
                </div>
            )
        }
    }
}

export default WorkoutDisplay;