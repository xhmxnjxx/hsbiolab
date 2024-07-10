/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import CustomHeader from './src/components/Header';
import MedicationRoutineCard from './src/components/Medication/Routine';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <CustomHeader date={'5월 30일'}></CustomHeader>
      <MedicationRoutineCard></MedicationRoutineCard>
    </SafeAreaView>
  );
};

export default App;
