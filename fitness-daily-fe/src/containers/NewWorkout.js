import React from "react";
import '../stylesheets/NewWorkout.css'
import WorkoutDisplay from '../components/WorkoutDisplay'

class NewWorkout extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const workoutInput = e.target.elements[0].value;
    console.log(workoutInput);
    if (workoutInput.length <= 3 && workoutInput.length > 0) {
      alert("workout name must be 4 characters long or more");
    } else if (workoutInput.length === 0) {
      alert("Empty workout field not allowed");
    } else {
      const categId = e.target.parentElement.parentElement.getAttribute("data-key");
      const { newWorkout, userDataReducer } = this.props;
      const { id, token } = userDataReducer;
      newWorkout({
        workoutName: workoutInput,
        userId: id,
        categoryId: Number(categId),
      });
      // const { userId, categoryId } = this.props.newWorkoutReducer;
      fetch("http://localhost:4000/v1/new_workout", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization: "Bearer " + token,
            },
            body: JSON.stringify({
                workout: {
                    workout_name: `${workoutInput}`,
                    category_id: categId,
                    user_id: id,
                },
            }),
        })
        .then((result) => {
            return result.json();
        })
        .then((res) => {
            if(res.hasOwnProperty('workout_name')) {
                form.reset();
            }
          console.log(res);
        })
        .catch((err) => {
          alert(err);
        });
    }
  }

  if(err){
    // componentDidUpdate(prevState) {
    //     const { userDataReducer } = this.props;
    //     const { token } = userDataReducer;
    //     const { userId, categoryId, workoutName } = this.props.newWorkoutReducer
    // console.log(categoryId, workoutName, userId);
    // console.log(prevState.state.newWorkoutReducer);
    // console.log(token);
    // if( prevState.newWorkoutReducer.workoutName != workoutName ) {
    //     console.log(prevState.newWorkoutReducer.workoutName+ ' ---- ' +workoutName);
    // fetch('http://localhost:4000/v1/new_workout',
    //     {
    //         method: 'POST',
    //         headers:  {
    //         "Content-Type": "application/json",
    //         "Accept": "application/json",
    //         Authorization: "Bearer " + token,
    //     },
    //     body: JSON.stringify(
    //         {
    //             workout: {
    //                 workout_name: `${workoutName}`,
    //                 category_id: categoryId,
    //                 user_id: userId,
    //             }
    //         }
    //     )
    // })
    // .then( result => {
    //     return result.json();
    // })
    // .then( res => {
    //     console.log(res)
    // })
    // .catch( err => {
    //     alert(err.message)
    // });
    // }
    // }
  }

  render() {
    const { workouts } = this.props;
    return (
      <div style={{ display: "none" }}>
        <form className="new-workout-form" onSubmit={this.handleSubmit}>
          <input className="workout-input" type="text" placeholder="new workout" />
          <button className="workout-submit"type="submit"> + </button>{" "}
        </form>{" "}
        <div className="category-workouts">
            {
                workouts.map(w => (
                    <WorkoutDisplay workout={w} displayBool={true}/>
                ))
            }
        </div>
      </div>
    );
  }
}

export default NewWorkout;
