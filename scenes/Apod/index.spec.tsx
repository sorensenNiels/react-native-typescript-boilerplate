import {renderWithProviders} from '@Test/Helpers/render';
import React from 'react';
import Apod from './index';

describe('Scenes', () => {
  describe('Home', () => {
    it('should match snapshot', () => {
      const wrapper = renderWithProviders(<Apod />);

      expect(wrapper).toMatchSnapshot();
    });
  });
});
