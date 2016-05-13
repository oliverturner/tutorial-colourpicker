import React, {Component, PropTypes} from 'react';
import shallowCompare                from 'react-addons-shallow-compare';

import styles from './styles.pcss';
import Item   from './item';

class Palette extends Component {
  constructor () {
    super();

    this.onItemHover = (colour) => () => {
      this.props.onItemHover(colour);
    };

    this.onItemClick = (colour) => (event) => {
      event.shiftKey
        ? this.props.onItemShiftClick(colour)
        : this.props.onItemClick(colour);
    };
  }

  shouldComponentUpdate (nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render () {
    return (
      <ul className={styles['palette']}>
        {this.props.palette.map((colour, i) => {
          if (colour) {
            return (
              <Item
                key={i}
                colour={colour}
                onHover={this.onItemHover}
                onClick={this.onItemClick}
              />
            );
          }

          return false;
        })}
      </ul>
    );
  }
}

Palette.propTypes = {
  palette:          PropTypes.object.isRequired,
  onItemHover:      PropTypes.func.isRequired,
  onItemClick:      PropTypes.func.isRequired,
  onItemShiftClick: PropTypes.func.isRequired
};

export default Palette;
