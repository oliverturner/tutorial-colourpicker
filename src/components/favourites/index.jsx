import React, {Component, PropTypes} from 'react';

import styles from './styles.pcss';

class Favourites extends Component {
  constructor () {
    super();

    this.onHover = (colour) => () => {
      this.props.onHover(colour);
    };

    this.onClick = (colour) => () => {
      this.props.onClick(colour);
    };
  }

  render () {
    return (
      <ul className={styles['favelist']}>
        {this.props.palette.map((fave, i) => {
          if (!fave) return false;

          return (
            <li key={i} className={styles['favelist__item']}>
              <button
                className={styles['favelist__btn']} style={{backgroundColor: fave}}
                onMouseOver={this.onHover(fave)} onFocus={this.onHover(fave)}
                onMouseOut={this.onHover()} onBlur={this.onHover()}
                onClick={this.onClick(fave)}
              />
            </li>
          );
        })}
      </ul>
    );
  }
}

Favourites.propTypes = {
  palette: PropTypes.array.isRequired,
  onHover: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Favourites;
