import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../login';
import SignUp from '../signup';

const Stack = createStackNavigator();

function Router() {
  return (
    <Stack.Navigator headerMode='none' initialRouteName='Login'>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={SignUp} />
    </Stack.Navigator>
  );
}

export default Router;