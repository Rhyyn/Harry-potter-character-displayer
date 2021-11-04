import React from "react";

function handleNames(props) {
    console.log(props.data);
    return (
        <div>
            <li>{props.data}</li>
        </div>
    )
}

export default handleNames;