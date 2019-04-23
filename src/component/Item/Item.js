import React from "react";

const Item = (props) => {

    return (
        <div>
            <h1>{props.id}</h1>
            <div>{props.title}</div>
        </div>
    );
}

export default Item;