import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../screens/Login';
import Home from '../screens/Home';

const { Navigator, Screen } = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen
          options={{
            headerShown: false,
          }}
          name='Login'
          component={Login}
        />
        <Screen name='Home' component={Home} />
      </Navigator>
    </NavigationContainer>
  );
}
