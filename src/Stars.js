import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import Star from "./Star";
function Stars({count}) {
    if(count<1 || count > 5){
        count = null;
    }
    const id = uuidv4();
    const arrElement = [];
    for(let i = 0; i <count; i+=1){
      arrElement.push(<Star id={id}/>);
    }
    return (
        <ul className={'card-body-stars'}>
            {arrElement}
        </ul>
    );
}

Stars.prototype = {
    count: PropTypes.number.isRequired,
}

export default Stars;