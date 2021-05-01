import {theme} from '@Definitions/Styled';
import Apod from '@Scenes/Apod';
import Home from '@Scenes/Home';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const AppStackNavigator = createStackNavigator({
  Home: {
    navigationOptions: () => ({
      title: 'Home',
      headerStyle: {
        backgroundColor: theme.colors.primary
      },
      headerTintColor: '#fff'
    }),
    screen: Home
  },
  Apod: {
    navigationOptions: () => ({
      title: 'Apod',
      headerStyle: {
        backgroundColor: theme.colors.primary
      },
      headerTintColor: '#fff'
    }),
    screen: Apod
  }
});

const AppContainer = createAppContainer(AppStackNavigator);

export default AppContainer;
