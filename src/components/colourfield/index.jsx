import React, {Component, PropTypes} from 'react';
import shallowCompare                from 'react-addons-shallow-compare';

import styles from './styles.pcss';

class ColourField extends Component {
  constructor () {
    super();

    this.onChange = (event) => {
      this.props.onChange(event.currentTarget.value);
    };

    this.onFormSubmit = (event) => {
      event.preventDefault();

      this.props.onSubmit(this.props.colour);
    };
  }

  shouldComponentUpdate (nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render () {
    return (
      <form className={styles['controls']} onSubmit={this.onFormSubmit}>
        <input
          className={styles['controls__input']}
          placeholder="#639"
          onChange={this.onChange}
          value={this.props.colour}
        />
        <button className={styles['controls__btn']}>Add to favorites</button>
      </form>
    );
  }
}

ColourField.propTypes = {
  colour:   PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default ColourField;
