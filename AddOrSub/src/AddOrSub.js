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
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';


class AddOrSub extends React.Component {
  render(){
    return (
        <View style = { styles.container }>
        <View style={{ justifyContent: 'space-around', width: '100%', height :100 }}>
            <TouchableOpacity onPress={ () => this.props.optionAdd() }>
                <Text>Addition</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={ () => this.props.optionSub() } style={{ marginTop: 30 }}>
                <Text>Subtraction</Text>
            </TouchableOpacity>

            <Text style={{ fontSize: 23, marginTop: 30 }}>{this.props.myOption}</Text>
            
        </View>
      </View>
    );
  }
};

function mapStateToProps(state) {
    return {
        myOption: state.myOption
    }
}

function mapDispatchToProps(dispatch) {
    return {
        optionAdd: () => dispatch({
            type: 'TYPE_ADDITION'
        }),
        optionSub: () => dispatch({
            type: 'TYPE_SUBTRACTION'
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddOrSub);

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
  });


