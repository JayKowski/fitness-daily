import React from 'react';
import timeStamp from '../helpers/timeStamp'

class NewRep extends React.Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();
        const { token } = this.props.userData;
        const repValue = e.target.elements[0].value;
        const form = e.target;
        const workoutId = e.target.parentElement.parentElement.children[0].getAttribute('data-key');
        // console.log(workoutId, repValue, token);
        if(Number(repValue) < 1) {
            alert('Rep value cannot be below 1');
        } else {
            fetch("http://localhost:4000/v1/add_rep", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: "Bearer " + token,
                },
                body: JSON.stringify({
                    rep: {
                        workout_id: workoutId,
                        rep_count: Number(repValue),
                        workout_date: timeStamp.toString(),
                    },
                }),
            })
            .then((result) => {
                return result.json();
            })
            .then((res) => {
                if(res.hasOwnProperty('workout_id')) {
                    form.reset();
                }
            console.log(res);
            })
            .catch((err) => {
            alert(err);
            });
        }
    }
    render() {
        return(
                <form onSubmit={this.handleSubmit}>
                    <input type="number" placeholder="rep count"/>
                    <button type="submit">+ reps</button>
                </form>
        )
    }
}

export default NewRep;