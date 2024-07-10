import {View} from 'react-native';
import styles from './styles';
import CustomHeader from '../../components/Header';
import MedicationRoutineCard from '../../components/Medication';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useContext, useState} from 'react';
import CustomButton from '../../components/Button';
import {MedicationContext} from '../../contexts/medication';
import {UserContext} from '../../contexts/user';

const HomeScreen = ({navigation}) => {
  const userContext = useContext(UserContext);
  const medicationContext = useContext(MedicationContext);

  const [isAdded, setIsAdded] = useState(false);
  const handleAddPress = () => {
    setIsAdded(!isAdded);
  };
  const handleModifyPress = () => {
    navigation.navigate('Modify');
  };

  return (
    <SafeAreaView style={styles.screenContainer}>
      <CustomHeader date={'5월 30일'}></CustomHeader>
      <View style={styles.bodyContainer}>
        <CustomButton
          content={isAdded ? '등록 취소' : '루틴 등록'}
          handleButtonPress={handleAddPress}></CustomButton>
        <MedicationRoutineCard
          isAdded={isAdded}
          name={userContext.state.name}
          time={medicationContext.state.time}
          memo={medicationContext.state.memo}></MedicationRoutineCard>
      </View>
      <CustomButton
        content="수정하기"
        handleButtonPress={handleModifyPress}></CustomButton>
    </SafeAreaView>
  );
};

export default HomeScreen;
