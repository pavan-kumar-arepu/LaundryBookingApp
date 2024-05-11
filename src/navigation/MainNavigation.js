import {createStackNavigator} from '@react-navigation/stack';
import {Routes} from './Routes';
import LoginScreen from '../screens/Auth/LoginScreen';
import RegisterScreen from '../screens/Auth/RegisterScreen';

import HomeScreen from '../screens/Dashboard/HomeScreen';
import ProfileScreen from '../screens/Dashboard/ProfileScreen';


const Stack = createStackNavigator();

export const NonAuthenticated = () => {
  return (
    <Stack.Navigator
      initialRouteName={Routes.LoginScreen}
      screenOptions={{header: () => null, headerShown: false}}>
      <Stack.Screen name={Routes.LoginScreen} component={LoginScreen} />
      <Stack.Screen name={Routes.RegisterScreen} component={RegisterScreen} />
    </Stack.Navigator>
  );
};

export const Authenticated = () => {
  return (
    <Stack.Navigator
      initialRouteName={Routes.HomeScreen}
      screenOptions={{header: () => null, headerShown: false}}>
      <Stack.Screen name={Routes.HomeScreen} component={HomeScreen} />
      <Stack.Screen name={Routes.ProfileScreen} component={ProfileScreen} />
    </Stack.Navigator>
  );
};
