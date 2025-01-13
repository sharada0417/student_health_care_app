import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Home from './components/Home';
import Profile from './components/Profile';
import ProfileTap from './components/ProfileTap';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='home' screenOptions={
          {
            headerStyle: { backgroundColor: '#4b0150' },
            headerTintColor:'#ffff', 
            headerTitleAlign:'center'
        }}>
          <Stack.Screen name='home' component={Home} options={{ title: "UoV Health Care" }} />
          <Stack.Screen name='profiletap' component={ProfileTap} options={{ title: "Student Health Profile" }} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
    
  );
}
