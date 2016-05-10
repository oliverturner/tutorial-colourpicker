import React, {Component, PropTypes} from 'react';

import styles from './styles.pcss';
import Item from './item';

class Palette extends Component {
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
      <ul className={styles['palette']}>
        {this.props.palette.map((fave, i) => {
          return fave
            ? <Item key={i} fave={fave} onHover={this.onHover} onClick={this.onClick} />
            : false;
        })}
      </ul>
    );
  }
}

Palette.propTypes = {
  palette: PropTypes.array.isRequired,
  onHover: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Palette;
