import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './src/screens/Login';
import CadastroUser from './src/screens/CadastroUser';
import Home from './src/screens/Home';

import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  'AsyncStorage'
])

export default function App() {
  const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen
          name='Login'
          component={Login}
          options={ {title: "Login"} }
        />
        <Stack.Screen
          name='CadastroUser'
          component={CadastroUser}
          options={ {title: "Cadastro Usuário"} }
        />
        <Stack.Screen
          name='Home'
          component={Home}
          options={ {title: "Home"} }
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

