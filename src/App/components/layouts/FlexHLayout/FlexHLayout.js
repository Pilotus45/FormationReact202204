import React, {useState} from 'react'
import PropTypes from 'prop-types'
import style from './FlexHLayout.module.scss'

const initialState = {};

const FlexHLayout = (props) => {
    const [state, setstate] = useState(initialState);
  return (
    <div className={style.FlexHLayout} data-testid="FlexHLayout">
        {props.children}
    </div>
  );
};

FlexHLayout.propTypes = {
  children: PropTypes.any.isRequired
};
FlexHLayout.defaultProps = {
  children:<div>No children</div>
}

export default FlexHLayout;
