import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Register from  './main/register'
import Login from './main/login'

const Tab = createBottomTabNavigator();

const Main = () => {
  return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({color, size }) => {
            if (route.name === 'Login') {
              return (
                <Ionicons
                  name={ 'ios-home' }
                  size={size}
                  color={color}
                />
              );
            } else if (route.name === 'Register') {
              return (
                <Ionicons
                  name={ 'ios-settings' }
                  size={size}
                  color={color}
                />
              );
            }
          },
          tabBarInactiveTintColor: 'gray',
          tabBarActiveTintColor: 'tomato',
        })}
      >
        <Tab.Screen name="Login" component={Login} options={{headerShown: false}} />
        <Tab.Screen name="Register" component={Register} options={{headerShown: false}} />
      </Tab.Navigator>
  );
}

export default Main;