import * as React from 'react';

import { shallow } from 'enzyme';

import App from '..';

describe('The <App /> Component', () => {

  it('renders correctly', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find('#app')).toHaveLength(1);
  });
});
