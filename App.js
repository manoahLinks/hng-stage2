import { StatusBar } from 'expo-status-bar';
import { StyleSheet} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import { EditScreen, HomeScreen } from './app/screens';
import colors from './app/config/colors';


const Stack = createNativeStackNavigator()

export default function App() {
  return (
   <NavigationContainer>
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name='Home' component={HomeScreen} options={{headerShown: false, headerTitle: false}}/>
      <Stack.Screen name='Edit-cv' component={EditScreen} options={{headerShadowVisible: false, headerStyle: {backgroundColor: colors.primary}, headerTintColor: colors.accent }}/>
    </Stack.Navigator>   
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
