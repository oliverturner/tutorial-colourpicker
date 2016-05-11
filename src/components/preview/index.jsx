import React, {PropTypes} from 'react';
import tinycolor from 'tinycolor2';

import styles from './styles.pcss';

const Preview = ({activeColour, tempColour}) => {
  const colour = tempColour || activeColour;

  if (tinycolor(colour).isValid()) {
    return (
      <div className={styles['preview']} style={{backgroundColor: colour}}>
        <input className={styles['preview__footer']} value={tinycolor(colour).toRgbString()} readOnly />
      </div>
    );
  }

  return <div className={styles['preview']} style={{backgroundColor: '#eee'}} />;
};

Preview.propTypes = {
  activeColour: PropTypes.string.isRequired,
  tempColour:   PropTypes.string
};

export default Preview;
