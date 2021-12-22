import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import { Intro } from './screens/intro';
import { MainScreen } from './screens/main';
import { LoginScreen } from './screens/login';

const Route = createStackNavigator();

export default function App(){
  
  return (
    <NavigationContainer>
        <Route.Navigator screenOptions={{headerShown:false}}>
            {/* <Route.Screen name='Intro' component={Intro} /> */}
            <Route.Screen name='Main' component={MainScreen} />
        </Route.Navigator>
    </NavigationContainer>
  );
};