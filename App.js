import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'react-native';
import CharactersListScreen from './src/screens/CharactersListScreen.js';
import CharacterDetailScreen from './src/screens/CharacterDetailScreen.js';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#24282F" />
      <Stack.Navigator
        initialRouteName="CharactersList"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#24282F',
          },
          headerTintColor: '#FFFFFF',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen
          name="CharactersList"
          component={CharactersListScreen}
          options={{
            title: 'Rick & Morty Characters',
          }}
        />
        <Stack.Screen
          name="CharacterDetail"
          component={CharacterDetailScreen}
          options={{
            title: 'Detalhes do Personagem',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
