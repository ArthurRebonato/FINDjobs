import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LogBox } from 'react-native';
import { Provider as StoreProvider } from 'react-redux';

import Login from './src/screens/Login';
import CadastroUser from './src/screens/CadastroUser';
import Home from './src/screens/Home';
import CadastroVagas from './src/screens/CadastroVagas';
import Mapa from './src/screens/Mapa';
import store from './src/services/store';

LogBox.ignoreLogs([
  'AsyncStorage'
])

export default function App() {
  const Stack = createNativeStackNavigator()

  return (
    <StoreProvider store={store}>
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
          <Stack.Screen
            name='CadastroVagas'
            component={CadastroVagas}
            options={ {title: "Registro de Vagas de Emprego"} }
          />
          <Stack.Screen
            name='Mapa'
            component={Mapa}
            options={ {title: "Mapa das Vagas de Emprego"} }
          />
        </Stack.Navigator>
      </NavigationContainer>
    </StoreProvider>
  );
}

