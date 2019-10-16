/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity
} from 'react-native';
import {createStore} from 'redux';
import CounterApp from './src/CounterApp';
import {Provider} from 'react-redux'

const initialState = {
  counter: 0
}

const reducer = (state = initialState, action) => {
  switch (action.type)
  {
    case 'INCREASE_COUNTER':
      return { counter: state.counter + 1 }
    case 'DECREASE_COUNTER':
        return { counter: state.counter - 1 }
  }
  return state
}

const store = createStore(reducer)

class App extends React.Component {

  render(){
    return (
      <Provider store={store}>
        <CounterApp />
      </Provider>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center', 
    justifyContent: 'center'
  },
  layout: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  
});

export default App;
