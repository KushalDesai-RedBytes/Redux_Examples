/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import AddOrSub from './src/AddOrSub';

const initState = {
  myOption: 'Addition'
}

const appReducer = (state = initState, action) => {
  switch (action.type) {
    case 'TYPE_ADDITION':
      return { myOption: 'Addition' }
    case 'TYPE_SUBTRACTION':
      return { myOption: 'Subtraction' }
  
    default:
      break;
  }

  return state;
}

const appStore = createStore(appReducer);

class App extends React.Component {

  constructor(props){
    super(props);

    console.log("***************CONSTRUCTOR");
    this.setState = {
      fName:'Dave'
    }

      this.updateName = this.updateName.bind(this);
  }

  updateName = () => {
    console.log('STATE UPDATED 1')
    this.setState({ fName: 'Sean' });
  }

  render(){
    console.log("RENDER");
    return (
      <Provider store={ appStore }>
        <AddOrSub />

        <TouchableOpacity onPress={this.updateName}>
          <Text>Update Name</Text>
        </TouchableOpacity>
      </Provider>
    );
  }

};


export default App;
