import React from 'react';

const coolButton = props => {
    let classList = 'button ' + props.className;
    
    if(props.isSmall){
        classList += ' is-small';
    }
    if (props.isSuccess) {
        classList += ' is-success';
    }
    if (props.isDanger) {
        classList += ' is-danger';
    };

    return <button class={classList}>{props.children}</button>
};

export default coolButton;