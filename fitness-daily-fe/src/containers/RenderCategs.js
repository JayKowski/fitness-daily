import React from 'react';
import Category from '../components/Category';
import { Link } from 'react-router-dom';
import * as Storage from '../localStorage/storage'
import '../stylesheets/RenderCategs.css';

let clicked = false;

function toggleDisplay(fName) {
    if(clicked === false) {
        fName.style.display = 'block';
        clicked = true;
    } else {
        fName.style.display = 'none';
        clicked = false;
    }
}

class RenderCategs extends React.Component {

    handleClick(e) {
        let wForm;
        if(e.target.className === 'category-individual') {
            wForm = e.target.children[1];
            toggleDisplay(wForm);
        } else if (e.target.className === "categ-data") {
            wForm = e.target.parentElement.children[1];
            toggleDisplay(wForm);
        }
    }

    componentDidUpdate(prevState) {
        const { userDataReducer } = this.props.state;
        const tok = userDataReducer.token ? userDataReducer.token : Storage.getToken();
        const state = this.props
        if(prevState.state.newWorkoutReducer.workoutName !== state.newWorkoutReducer.workoutName){
            const { categories } = this.props;
            if(userDataReducer instanceof Object) {
                fetch('http://localhost:4000/v1/categories', 
                    {   
                        method: 'GET',
                        headers:  {
                        "Content-Type": "application/json",
                        "Accept": "application/json",
                        Authorization: "Bearer " + tok,
                    },
                })
                .then( result => {
                    return result.json();
                })
                .then( res => {
                    console.log(res)
                    categories(res);
                });
            }
        }
    }

    componentDidMount() {
        const { categories } = this.props;
        const { userDataReducer } = this.props.state;
        const tok = userDataReducer.token ? userDataReducer.token : Storage.getToken();
        if(userDataReducer instanceof Object) {
            fetch('http://localhost:4000/v1/categories', 
                {   
                    method: 'GET',
                    headers:  {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    Authorization: "Bearer " + tok,
                },
            })
            .then( result => {
                return result.json();
            })
            .then( res => {
                console.log(res)
                categories(res);
            });
        }
    }

    render() {
        const { categoriesReducer } = this.props.state;
        const { userDataReducer } = this.props.state;
        const { id } = userDataReducer;
        if(categoriesReducer.length > 0) {
            console.log(categoriesReducer.length > 0)
            return (
                <div className="render-categs">
                    <h1 className="categs-head">Workout Categories</h1>
                    <div onClick={this.handleClick} className="categs-container">
                        {
                            categoriesReducer.map( c => (
                                <Category 
                                    category={c} 
                                    newWorkout={this.props.newWorkout} 
                                    newWorkoutReducer={this.props.newWorkoutReducer} 
                                    userDataReducer={this.props.userDataReducer}
                                    state={this.props.state}
                                    displayBool={true}
                                />
                            ))
                        }
                    </div>
                    <div>
                        <Link to={`/fitdaily/user/${id}/new-data/`}>start tracking</Link>
                    </div>
                </div>
            )
        } else {
            return (
                <h1>{categoriesReducer.message}</h1>
            )
        }
    }
}

export default RenderCategs;