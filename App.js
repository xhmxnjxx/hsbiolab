import React from 'react';
import {useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/Home';
import MedicationProvider from './src/contexts/medication';
import ModifyScreen from './src/screens/Modify';
import UserProvider from './src/contexts/user';
import MetricsProvider from './src/contexts/metrics';

const Stack = createNativeStackNavigator();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <MedicationProvider>
      <MetricsProvider>
        <UserProvider>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="Modify"
                component={ModifyScreen}
                options={{
                  headerShown: false,
                }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </UserProvider>
      </MetricsProvider>
    </MedicationProvider>
  );
};

export default App;
