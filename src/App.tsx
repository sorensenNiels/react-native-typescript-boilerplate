import {theme} from '@Definitions/Styled';
import '@I18n';
import {configureStore} from '@Redux';
import AppContainer from '@Router';
import RouterActions from '@Services/RouterActions';
import {SafeArea} from '@Styled';
import React, {Component, ReactElement} from 'react';
import BootSplash from 'react-native-bootsplash';
import {Provider} from 'react-redux';
import {ThemeProvider} from 'styled-components/native';

// Configure Store
const store = configureStore({});

class App extends Component<{}> {
  public componentDidMount(): void {
    BootSplash.hide();
  }

  public render(): ReactElement {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <SafeArea>
            <AppContainer
              ref={(ref: object) => RouterActions.setNavigationReference(ref)}
            />
          </SafeArea>
        </ThemeProvider>
      </Provider>
    );
  }
}

export default App;
