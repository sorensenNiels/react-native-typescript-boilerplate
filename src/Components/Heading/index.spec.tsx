import {Heading} from '@Components';
import {renderWithProviders} from '@Test/Helpers/render';
import {shallow} from 'enzyme';
import * as React from 'react';

describe('Components', () => {
  describe('Heading', () => {
    // const wrap = renderer.create(<Heading text="World" />).toJSON();

    it('should match snapshot', () => {
      const wrapper = renderWithProviders(<Heading text="World" />);

      expect(wrapper).toMatchSnapshot();
    });

    const wrap = shallow(<Heading text="World" />);

    it('should render FrontText and  BackText without throwing an error', () => {
      expect(wrap.children().length).toEqual(2);
    });

    it('FrontText should equal World', () => {
      expect(wrap.children().first().text()).toEqual('World');
    });
  });
});
