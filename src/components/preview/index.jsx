import React, {PropTypes} from 'react';

import styles from './styles.pcss';

const Preview = ({activeColour, tempColour}) => {
  const colour = tempColour || activeColour;

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
  activeColour: PropTypes.object.isRequired,
  tempColour:   PropTypes.object
};

export default Preview;
