import React, {useState} from 'react'
import PropTypes from 'prop-types'
import style from './TemplateName.module.scss'

const initialState = {};

const TemplateName = (props) => {
    const [state, setstate] = useState(initialState);
  return (
    <div className={style.TemplateName} data-testid="TemplateName">
        {props.children}
    </div>
  );
};

TemplateName.propTypes = {
  children: PropTypes.any.isRequired
};
TemplateName.defaultProps = {
  children:<div>No children</div>
}

export default TemplateName;
