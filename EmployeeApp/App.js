/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import EmployeeApp from './src/EmployeeApp';

const initialState = {
  1:{
    empId: 1,
    empNmae: 'Emp One',
    empSalary: 10000.0
  },
  2:{
    empId: 2,
    empNmae: 'Emp Two',
    empSalary: 20000.0
  },
  3:{
    empId: 3,
    empNmae: 'Emp Three',
    empSalary: 30000.0
  },
  4:{
    empId: 4,
    empNmae: 'Emp Four',
    empSalary: 40000.0
  },
  5:{
    empId: 5,
    empNmae: 'Emp Five',
    empSalary: 50000.0
  },
};

const reducer = (state = initialState, action) => {

  let initialSalary;
  let increment;
  let newSalary;
  let employeeObject;

  if (action.id ) {
    initialSalary = state[action.id].empSalary;
    increment = (initialSalary / 100) * 20
  }

  switch (action.type) {
    case "GOOD_PERFORMANCE":
      newSalary = initialSalary + increment;
      employeeObject = state[action.id];
      employeeObject.empSalary = newSalary;
      //return new state
      return Object.assign({}, state)
      
    case "BAD_PERFORMANCE":
          newSalary = initialSalary - increment;
          employeeObject = state[action.id];
          employeeObject.empSalary = newSalary;
          //return new state
          return Object.assign({}, state)
  
    
  }

  return state;

}

const store = createStore(reducer);

export default class App extends React.Component{
  render(){
    return (
      <Provider store={store}>
        <EmployeeApp />
      </Provider> 
    );
  }
};
