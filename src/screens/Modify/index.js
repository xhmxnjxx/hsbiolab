import {Text, TextInput, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './styles';
import CustomButton from '../../components/Button';
import {useContext, useState} from 'react';
import {MedicationContext} from '../../contexts/medication';
import {UserContext} from '../../contexts/user';

const ModifyScreen = ({navigation}) => {
  const userContext = useContext(UserContext);
  const medicationContext = useContext(MedicationContext);
  const [name, setName] = useState(userContext.state.name);
  const [time, setTime] = useState(medicationContext.state.time);
  const [memo, setMemo] = useState(medicationContext.state.memo);
  const handleNameChange = text => {
    setName(text);
  };
  const handleTimeChange = text => {
    setTime(text);
  };
  const handleMemoChange = text => {
    setMemo(text);
  };

  const handleModifyUserPress = () => {
    if (name) {
      userContext.actions.setName(name);
    }
  };
  const handleModifyMedicationPress = () => {
    if (time && memo) {
      medicationContext.actions.setTime(time);
      medicationContext.actions.setMemo(memo);
    }
  };

  const handleHomePress = () => {
    navigation.navigate('Home');
  };
  return (
    <SafeAreaView style={styles.screenContainer}>
      <View>
        <Text style={styles.titleText}>정보 수정하기</Text>
      </View>
      <View style={styles.userContainer}>
        <TextInput
          style={styles.input}
          defaultValue={name}
          placeholder="이름"
          onChangeText={handleNameChange}></TextInput>
        <CustomButton
          content="변경"
          handleButtonPress={handleModifyUserPress}></CustomButton>
      </View>
      <View style={styles.medicationContainer}>
        <View style={styles.inputContainer}>
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
        </View>
        <CustomButton
          content="변경"
          handleButtonPress={handleModifyMedicationPress}></CustomButton>
      </View>

      <CustomButton
        content="홈 화면"
        handleButtonPress={handleHomePress}></CustomButton>
    </SafeAreaView>
  );
};

export default ModifyScreen;
