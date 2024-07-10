import {TextInput, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './styles';
import CustomButton from '../../components/Button';
import {useContext, useState} from 'react';
import {MedicationContext} from '../../contexts/medication';

const MyPageScreen = ({navigation}) => {
  const {state, actions} = useContext(MedicationContext);
  const [name, setName] = useState(state.name);
  const [time, setTime] = useState(state.time);
  const [memo, setMemo] = useState(state.memo);
  const handleNameChange = text => {
    setName(text);
  };
  const handleTimeChange = text => {
    setTime(text);
  };
  const handleMemoChange = text => {
    setMemo(text);
  };
  const handleModifyPress = () => {
    actions.setName(name);
    actions.setTime(time);
    actions.setMemo(memo);
  };
  const handleHomePress = () => {
    navigation.navigate('Home');
  };
  return (
    <SafeAreaView style={styles.screenContainer}>
      <TextInput
        style={styles.input}
        defaultValue={name}
        placeholder="이름"
        onChangeText={handleNameChange}></TextInput>
      <TextInput
        style={styles.input}
        defaultValue={time}
        placeholder="시간"
        onChangeText={handleTimeChange}></TextInput>
      <TextInput
        style={styles.input}
        defaultValue={memo}
        placeholder="메모"
        onChangeText={handleMemoChange}></TextInput>
      <CustomButton
        content="변경"
        handleButtonPress={handleModifyPress}></CustomButton>
      <CustomButton
        content="홈"
        handleButtonPress={handleHomePress}></CustomButton>
    </SafeAreaView>
  );
};

export default MyPageScreen;
