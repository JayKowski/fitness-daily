import React from 'react';

function Category(props) {
    return (
        <div>
            <div>
                <span>{props.category.id}{". "}</span>
                <span>{props.category.workout_name}</span>
            </div>
        </div>
    )
}

export default Category;