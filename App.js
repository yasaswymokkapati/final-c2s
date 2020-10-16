import * as React from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';
import AppHeader from './components/AppHeader.js';
import Food from './screens/food.js';
import Main from './screens/main.js';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Book from './screens/books';
import Clothes from './screens/clothes';
import Groceries from './screens/groceries';
import Medicines from './screens/medicines';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';

export default class App extends React.Component {
  render() {
    return (
      <View style={{ marginTop: 20 }}>
        <AppContainer />
      </View>
    );
  }
}
var AppNavigator = createSwitchNavigator({
  Signup : SignupScreen,
  Login : LoginScreen,
  Main: Main,
  Food: Food,
  Groceries: Groceries,
  Book: Book,
  Clothes: Clothes,
  Medicines: Medicines,
});
const AppContainer = createAppContainer(AppNavigator);
