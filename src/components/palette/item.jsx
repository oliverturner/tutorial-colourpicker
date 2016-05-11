import React, {Component, PropTypes} from 'react';

import styles from './styles.pcss';

const PaletteItem = ({colour, onHover, onClick}) => (
  <li className={styles['palette__item']}>
    <button
      className={styles['palette__btn']} style={{backgroundColor: colour}}
      onMouseOver={onHover(colour)} onFocus={onHover(colour)}
      onMouseOut={onHover()} onBlur={onHover()}
      onClick={onClick(colour)}
    />
  </li>
);


PaletteItem.propTypes = {
  colour:  PropTypes.string.isRequired,
  onHover: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired
};

export default PaletteItem;
