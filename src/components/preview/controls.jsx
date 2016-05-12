import React, {PropTypes} from 'react';
import {connect}          from 'react-redux';

import constants  from 'constants';
import ControlBar from 'components/controlbar';

const PreviewControls = ({setActiveColour}) => (
  <ControlBar
    controls={[
      {label: 'Randomise', handler: setActiveColour}
    ]}
  />
);

PreviewControls.propTypes = {
  setActiveColour: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  setActiveColour: () => dispatch({type: constants.SET_ACTIVE_COLOUR, payload: {}})
});

export default connect(null, mapDispatchToProps)(PreviewControls);
