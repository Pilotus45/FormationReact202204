import React, {useState,useEffect} from 'react';
import style from "./Button.module.scss";
import PropTypes from 'prop-types';

function Button(props) {
    const [clicked, setClicked] = useState(false);
    useEffect(() => {
        if(clicked) {
            setTimeout(() => {setClicked(false)}, 1000);
        }
    }, [clicked]);
    // ngOnInit
    useEffect(() => {
        console.log("Mounted!")
    }, []);
    return (
        <button onClick={(evt) => {
                    setClicked(true);
                    props.buttonClicked("Hello");
                }}
                className={`${style.Button}${clicked?' '+style.clicked:''}`}
                style={{...props.appStyle, backgroundColor: props.bgColor, color: props.color}}>
            {props.children ? props.children : props.text}<br/>
            {clicked ? 'clicked':'unclicked'}
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