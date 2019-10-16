/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';

class MyApp extends React.Component {
  

  render(){
    return (
      <View style = { styles.container }>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '100%', height :100 }}>
            <TouchableOpacity onPress={ () => this.props.incCounter() }>
                <Text>INCREASE</Text>
            </TouchableOpacity>
            <Text style={{ fontSize: 23 }}>{this.props.myCounter}</Text>
            <TouchableOpacity onPress={ () => this.props.decCounter() }>
                <Text>DECREASE</Text>
            </TouchableOpacity>
        </View>
      </View>
    );
  }

};

function mapStateToProps(state) {
    return {
        myCounter: state.myCounter
    }
}

function mapDispatchToProps(dispatch) {
    return {
        incCounter: () => dispatch({
            type: 'INC_COUNTER'
        }),
        decCounter: () => dispatch({
            type: 'DEC_COUNTER'
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyApp)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});
