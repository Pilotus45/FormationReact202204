import React, {useState} from 'react'
import PropTypes from 'prop-types'
import style from './FlexVLayout.module.scss'

const initialState = {};

const FlexVLayout = (props) => {
    const [state, setstate] = useState(initialState);
  return (
    <div className={style.FlexVLayout} data-testid="FlexVLayout">
        {props.children}
    </div>
  );
};

FlexVLayout.propTypes = {
  children: PropTypes.any.isRequired
};
FlexVLayout.defaultProps = {
  children:<div>No children</div>
}

export default FlexVLayout;
