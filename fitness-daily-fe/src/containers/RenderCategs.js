import React from 'react';
import Category from '../components/Category'
import '../stylesheets/RenderCategs.css'

class RenderCategs extends React.Component {
    // componentDidUpdate(prevState) {
    //     const { categories } = this.props;
    //     const { categoriesReducer, userDataReducer } = this.props.state;
    //     if(prevState.state.userDataReducer.username !== userDataReducer.username) {
    //         fetch('http://localhost:4000/v1/categories', 
    //             {   
    //                 method: 'GET',
    //                 headers:  {
    //                 "Content-Type": "application/json",
    //                 "Accept": "application/json",
    //                 Authorization: "Bearer " + userDataReducer.token,
    //             },
    //         })
    //         .then( result => {
    //             return result.json();
    //         })
    //         .then( res => {
    //             categories(res)
    //             console.log(res);
    //         })
    //     }
    // }

    componentDidMount() {
        const { categories } = this.props;
        const { userDataReducer } = this.props.state;
        console.log('Render Categs Mounting');
        if(userDataReducer instanceof Object) {
        fetch('http://localhost:4000/v1/categories', 
            {   
                method: 'GET',
                headers:  {
                "Content-Type": "application/json",
                "Accept": "application/json",
                Authorization: "Bearer " + userDataReducer.token,
            },
        })
        .then( result => {
            return result.json();
        })
        .then( res => {
            categories(res)
        });
        }
    }

    render() {
        const { categoriesReducer } = this.props.state;
        console.log(categoriesReducer instanceof Array);
        if(categoriesReducer instanceof Array) {
            return (
                <div>
                    <h1>Workout Categories</h1>
                    {
                        categoriesReducer.map( c => (
                            <Category category={c} />
                        ))
                    }
                </div>
            )
        } else {
            return (
                <h1>Loading categories. . .</h1>
            )
        }
    }
}

export default RenderCategs;