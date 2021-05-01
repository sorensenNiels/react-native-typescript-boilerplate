import {renderWithProviders} from '@Test/Helpers/render';
import React from 'react';
import Home from './index';

describe('Scenes', () => {
  describe('Home', () => {
    it('should match snapshot', () => {
      const wrapper = renderWithProviders(<Home />);

      expect(wrapper).toMatchSnapshot();
    });
  });
});
