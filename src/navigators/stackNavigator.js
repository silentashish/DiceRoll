import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import StartScreen from '../features/StartScreen/index';
import Level1 from '../features/Level1/level1';
import Level2 from '../features/Level2/level2';
import Level3 from '../features/Level3/level3';

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen
          name="StartScreen"
          component={StartScreen}
          options={{gestureEnabled: false}}
          resetOnBlur={true}
        />
        <Stack.Screen
          name="Level1"
          component={Level1}
          options={{gestureEnabled: false}}
          resetOnBlur={true}
        />
        <Stack.Screen
          name="Level2"
          component={Level2}
          options={{gestureEnabled: false}}
          resetOnBlur={true}
        />
        <Stack.Screen
          name="Level3"
          component={Level3}
          options={{gestureEnabled: false}}
          resetOnBlur={true}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
