import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import { Intro } from './screens/intro';
import { MainScreen } from './screens/main';
import { LoginScreen } from './screens/login';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useStore, Ctx } from './store/use-store';

const Route = createStackNavigator();

export default function App(){
  const store = useStore()
  
  useEffect(() => {
    AsyncStorage.getItem('user')
      .then(res => {
        if(res){
          store.setLogin(true)
          store.setUserName(res)
        }
      })
  },[])

  return (
    <Ctx.Provider value={store}>
      <NavigationContainer>
        <Route.Navigator screenOptions={{headerShown:false}}>
            <Route.Screen name='Intro' component={Intro} />
            <Route.Screen name='Main' component={MainScreen} />
            <Route.Screen name='Login' component={LoginScreen} /> 
        </Route.Navigator>
      </NavigationContainer>
    </Ctx.Provider>
  );
};