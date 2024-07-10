import {View} from 'react-native';
import styles from './styles';
import CustomHeader from '../../components/Header';
import MedicationRoutineCard from '../../components/Medication';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useContext, useState} from 'react';
import CustomButton from '../../components/Button';
import {MedicationContext} from '../../contexts/medication';

const HomeScreen = ({navigation}) => {
  const {state, actions} = useContext(MedicationContext);

  const [isAdded, setIsAdded] = useState(false);
  const handleAddPress = () => {
    setIsAdded(!isAdded);
  };
  const handleMyPagePress = () => {
    navigation.navigate('MyPage');
  };

  return (
    <SafeAreaView style={styles.screenContainer}>
      <CustomHeader date={'5월 30일'}></CustomHeader>
      <View style={styles.bodyContainer}>
        <CustomButton
          content={isAdded ? '등록 취소' : '등록'}
          handleButtonPress={handleAddPress}></CustomButton>
        <MedicationRoutineCard
          isAdded={isAdded}
          name={state.name}
          time={state.time}
          memo={state.memo}></MedicationRoutineCard>
      </View>
      <CustomButton
        content="마이페이지"
        handleButtonPress={handleMyPagePress}></CustomButton>
    </SafeAreaView>
  );
};

export default HomeScreen;
