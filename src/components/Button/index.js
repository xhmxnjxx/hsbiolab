import {Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';

const CustomButton = ({content, handleButtonPress}) => {
  return (
    <View>
      <TouchableOpacity onPress={handleButtonPress}>
        <View style={styles.buttonContainer}>
          <View style={styles.contentContainer}>
            <Text>{content}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CustomButton;
