import React from "react";
import {View} from "react-native";
import Signup from "./components/Signup"; 
import SignIn from "./components/Signin";
import Dashboard from "./components/Dashboard";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

const App = () =>{
  return(
      <NavigationContainer initialRouteName="signin">
        <Stack.Navigator>
          <Stack.Screen name="signup" component={Signup}></Stack.Screen>
          <Stack.Screen name="signin" component={SignIn}></Stack.Screen>
          <Stack.Screen name="dashboard" component={Dashboard}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
  )
}

export default App;

