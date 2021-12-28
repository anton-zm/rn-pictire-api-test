import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import { Intro } from './screens/intro';
import { MainScreen } from './screens/main';
import { LoginScreen } from './screens/login';
import { ItemScreen } from './screens/item';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useStore, Ctx } from './store/use-store';
import { Screens } from './interfaces';

const Route = createStackNavigator();

export default function App(){
  const store = useStore()
  
  useEffect(() => {
    AsyncStorage.getItem('user')
      .then(res => {
        if(res){
          store.setLogin(true)
          store.setUserName(res)
          store.fetchStartData()
        }
      })
  },[])

  return (
    <Ctx.Provider value={store}>
      <NavigationContainer>
        <Route.Navigator screenOptions={{headerShown:false}}>
            <Route.Screen name={Screens.INTRO} component={Intro} />
            <Route.Screen name={Screens.MAIN} component={MainScreen} />
            <Route.Screen name={Screens.LOGIN} component={LoginScreen} /> 
            <Route.Screen name={Screens.ITEM} component={ItemScreen} />
        </Route.Navigator>
      </NavigationContainer>
    </Ctx.Provider>
  );
};