import React, {Component, PropTypes} from 'react';

import styles from './styles.pcss';

const PaletteItem = ({fave, onHover, onClick}) => (
  <li className={styles['palette__item']}>
    <button
      className={styles['palette__btn']} style={{backgroundColor: fave}}
      onMouseOver={onHover(fave)} onFocus={onHover(fave)}
      onMouseOut={onHover()} onBlur={onHover()}
      onClick={onClick(fave)}
    />
  </li>
);


PaletteItem.propTypes = {
  fave:    PropTypes.array.isRequired,
  onHover: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired
};

export default PaletteItem;
