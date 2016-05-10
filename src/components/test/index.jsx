import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

class Test extends Component {
  render () {
    return <div>TEST</div>;
  }
}

Test.contextTypes = {
  store: PropTypes.object
};

export default connect(null, null)(Test);
