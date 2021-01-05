import React from 'react';
import '../stylesheets/Category.css';
import NewWorkout from '../containers/NewWorkout';
import WorkoutDisplay from './WorkoutDisplay';

class Category extends React.Component {
    componentDidUpdate() {
        console.log('category UPDATED');
    }

    render() {
        if(this.props.displayBool) {   
            const categWorkouts = this.props.category.workouts;
            return (
                <div onClick={this.handleClick} className="category-individual" data-key={`${this.props.category.id}`}>
                    {/* <span className="categ-data">{this.props.category.id}{". "}</span> */}
                    <span className="categ-data">{this.props.category.category_name}</span>
                    <NewWorkout 
                        newWorkout={this.props.newWorkout} 
                        newWorkoutReducer={this.props.newWorkoutReducer}
                        userDataReducer={this.props.userDataReducer}
                        state={this.props.state}
                        workouts={categWorkouts}
                    />
                </div>
            )
        } else {
            const { categ } = this.props;
            return (
                <div className="">
                    <h3>{categ.category_name}</h3>
                    {
                        categ.workouts.map(w => (
                            <WorkoutDisplay 
                                workout={w}
                                userData={this.props.userData}
                            />
                        ))
                    }
                </div>
            )
        }
    }
}

export default Category;