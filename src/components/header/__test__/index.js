import React     from 'react';
import {shallow} from 'enzyme';

import Header    from '../index.jsx';

describe('Header', () => {
  it('displays the title', () => {
    const header = shallow(<Header>Hello</Header>);

    expect(header.text()).to.equal('Hello');
  });
});
