import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Tela1 from './telas/tela1';
import Tela2 from './telas/tela2';
import Tela3 from './telas/tela3'


const Stack = createNativeStackNavigator();
function App() {
      return (
  <NavigationContainer >
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Tela1} />
      <Stack.Screen name="Tela2" component={Tela2} />
      <Stack.Screen name="Tela3" component={Tela3} />
   </Stack.Navigator>
   </NavigationContainer>
  );
}

export default App;

