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

import {connect} from 'react-redux';

class CounterApp extends React.Component {

  render(){
    return (
      <View style={ styles.container }>
        
        <View style = {styles.layout}>
          <TouchableOpacity onPress={() => this.props.increaseCounter()}>
            <Text style={styles.fontLayout}>Increment</Text>
          </TouchableOpacity>
          <Text style={styles.fontLayout}>{this.props.counter}</Text>
          <TouchableOpacity onPress={() => this.props.decreaseCounter()}>
            <Text style={styles.fontLayout}>Decrement</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
};

function mapStateToProps(state){
    return {
        counter: state.counter
    }
}

function mapDispatchToProps(dispatch){
    return {
        increaseCounter: () => dispatch({ type: 'INCREASE_COUNTER' }),
        decreaseCounter: () => dispatch({ type: 'DECREASE_COUNTER' }),
    }
}

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
  fontLayout: {
    fontSize: 25
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(CounterApp);
