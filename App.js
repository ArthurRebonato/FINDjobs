import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LogBox } from 'react-native';
import { Provider as StoreProvider } from 'react-redux';

import Login from './src/screens/Login';
import CadastroUser from './src/screens/CadastroUser';
import Home from './src/screens/Home';
import AllVagas from './src/screens/AllVagas';
import CadastroVagas from './src/screens/CadastroVagas';
import Mapa from './src/screens/Mapa';
import Sobre from './src/screens/Sobre';
import FAQ from './src/screens/FAQ';
import Perguntas from './src/screens/Perguntas';
import CadastroPerguntas from './src/screens/CadastroPerguntas';

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
            options={{title: "Login",
            headerStyle: {
              backgroundColor: '#031A31'
            },
            headerTintColor: '#fff'} }
          />
          <Stack.Screen
            name='CadastroUser'
            component={CadastroUser}
            options={ {title: "Cadastro Usuário",
            headerStyle: {
              backgroundColor: '#031A31'
            },
            headerTintColor: '#fff'} }
          />
          <Stack.Screen
            name='Home'
            component={Home}
            options={ {title: "Home",
            headerStyle: {
              backgroundColor: '#031A31'
            },
            headerTintColor: '#fff'} }
          />
          <Stack.Screen
            name='AllVagas'
            component={AllVagas}
            options={ {title: "Registros de Vagas de Emprego",
            headerStyle: {
              backgroundColor: '#031A31'
            },
            headerTintColor: '#fff'} }
          />
          <Stack.Screen
            name='CadastroVagas'
            component={CadastroVagas}
            options={ {title: "Cadastrar nova Vaga",
            headerStyle: {
              backgroundColor: '#031A31'
            },
            headerTintColor: '#fff'} }
          />
          <Stack.Screen
            name='Mapa'
            component={Mapa}
            options={ {title: "Mapa das Vagas de Emprego",
            headerStyle: {
              backgroundColor: '#031A31'
            },
            headerTintColor: '#fff'} }
          />
          <Stack.Screen
            name='Sobre'
            component={Sobre}
            options={ {title: "Sobre o Desenvolvedor",
            headerStyle: {
              backgroundColor: '#031A31'
            },
            headerTintColor: '#fff'} }
          />
          <Stack.Screen
            name='FAQ'
            component={FAQ}
            options={ {title: "FAQ - funcionalidades",
            headerStyle: {
              backgroundColor: '#031A31'
            },
            headerTintColor: '#fff'} }
          />
          <Stack.Screen
            name='Perguntas'
            component={Perguntas}
            options={ {title: "Perguntas",
            headerStyle: {
              backgroundColor: '#031A31'
            },
            headerTintColor: '#fff'} }
          />
          <Stack.Screen
            name='CadastroPerguntas'
            component={CadastroPerguntas}
            options={ {title: "Cadastro Perguntas",
            headerStyle: {
              backgroundColor: '#031A31'
            },
            headerTintColor: '#fff'} }
          />
        </Stack.Navigator>
      </NavigationContainer>
    </StoreProvider>
  );
}

