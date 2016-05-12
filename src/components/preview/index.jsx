import React, {PropTypes} from 'react';
import tinycolor from 'tinycolor2';

import styles from './styles.pcss';

const Preview = ({activeColour, tempColour}) => {
  const colour = tinycolor(tempColour || activeColour);

  if (colour.isValid()) {
    return (
      <figure className={styles['preview']} style={{backgroundColor: colour.toHexString()}}>
        <figcaption className={styles['preview__footer']}>
          {colour.toRgbString()}
        </figcaption>
      </figure>
    );
  }

  return <div className={styles['preview']} style={{backgroundColor: '#eee'}} />;
};

Preview.propTypes = {
  activeColour: PropTypes.string.isRequired,
  tempColour:   PropTypes.string
};

export default Preview;
