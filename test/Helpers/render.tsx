// #region Global Imports
import {theme} from '@Definitions/Styled';
import {I18n} from '@I18n/index';
import {configureStore} from '@Redux/store';
import React from 'react';
import {I18nextProvider} from 'react-i18next';
import {Provider} from 'react-redux';
import renderer from 'react-test-renderer';
import {ThemeProvider} from 'styled-components/native';

export function renderWithProviders(child: React.ReactElement) {
  return renderer
    .create(
      <Provider store={configureStore({})}>
        <I18nextProvider i18n={I18n}>
          <ThemeProvider theme={theme}>{child}</ThemeProvider>
        </I18nextProvider>
      </Provider>
    )
    .toJSON();
}
