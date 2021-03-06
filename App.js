import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer,createSwitchNavigator } from 'react-navigation'
import WelcomeScreen from './screens/WelcomeScreen';
import AppTabNavigator from './components/AppTabNavigator'

export default class App extends React.Component {
  render(){
  return (
    <View>
      <AppContainer/>
    </View>
  );
}
}

const SwitchNavigator = createSwitchNavigator({
  WelcomeScreen:{screen:WelcomeScreen},BottomTab:{screen:AppTabNavigator}
})

const AppContainer = createAppContainer(SwitchNavigator)