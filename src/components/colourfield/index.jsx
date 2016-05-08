import React, {Component} from 'react'

import styles from './styles.pcss';

class ColourField extends Component {
  constructor () {
    super();

    this.state = {
      colour: ''
    };

    this.onChange = (event) => {
      console.log('this.onChange:', event.currentTarget.value)

      this.setState({
        colour: event.currentTarget.value
      });
    };

    this.onFormSubmit = (event) => {
      event.preventDefault();
      // dispatch here
    };
  }

  render () {
    return (
      <form className={styles['controls']} onSubmit={this.onFormSubmit}>
        <input
          className={styles['controls__input']}
          placeholder="#639"
          onChange={this.onChange}
          value={this.state.colour}
        />
        <button>Add to favorites</button>
      </form>
    );
  }
}

export default ColourField;
