import React from "react";

function Item(props)
{
    return (
        <div>
            <img src={props.item.image} alt="img" className="slide"/>
        </div>
    )
}

export default Item;