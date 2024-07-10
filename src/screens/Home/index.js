import {View} from 'react-native';
import styles from './styles';
import CustomHeader from '../../components/Header';
import MedicationRoutineCard from '../../components/Medication';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useContext, useState} from 'react';
import CustomToggle from '../../components/Toggle';
import {MedicationContext} from '../../contexts/medication';

const HomeScreen = ({}) => {
  const {state, actions} = useContext(MedicationContext);
  const {name, time, memo} = state;
  const {setName, setTime, setMemo} = actions;

  const [isAdded, setIsAdded] = useState(false);
  const handleTogglePress = () => {
    setIsAdded(!isAdded);
  };
  return (
    <SafeAreaView>
      <CustomHeader date={'5월 30일'}></CustomHeader>
      <View style={styles.bodyContainer}>
        <CustomToggle
          isAdded={isAdded}
          handleTogglePress={handleTogglePress}></CustomToggle>
        <MedicationRoutineCard
          isAdded={isAdded}
          name={name}
          time={time}
          memo={memo}></MedicationRoutineCard>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
