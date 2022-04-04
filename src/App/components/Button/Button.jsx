import React from 'react';
import './Button.scss';
import PropTypes from 'prop-types';

function Button(props) {
    return (
        <button 
        onClick={(evt) => {
            props.buttonClicked("Hello");
        }}
        className="Button" style={{...props.appStyle, backgroundColor: props.bgColor, color: props.color}}>
        {props.children ? props.children : props.text}
        </button>
    );
}

Button.propTypes= {
    text: PropTypes.string.isRequired,
    buttonClicked: PropTypes.func.isRequired,
    bgColor: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    children: PropTypes.any.isRequired,
    type: PropTypes.string.isRequired,
    appStyle: PropTypes.object.isRequired
}

Button.defaultProps = {
    text: "Bouton",
    buttonClicked:() => {console.warn("Fonction non definie")},
    type: "button",
    color: "white",
    bgColor: "blue",
    children: "",
    appStyle: {}
}

export default Button;