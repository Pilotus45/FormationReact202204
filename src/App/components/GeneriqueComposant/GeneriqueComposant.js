import React from 'react';
import PropTypes from 'prop-types';
import styles from './GeneriqueComposant.module.scss';

const GeneriqueComposant = () => (
  <div className={styles.GeneriqueComposant} data-testid="GeneriqueComposant">
    GeneriqueComposant Component
  </div>
);

GeneriqueComposant.propTypes = {};

GeneriqueComposant.defaultProps = {};

export default GeneriqueComposant;
