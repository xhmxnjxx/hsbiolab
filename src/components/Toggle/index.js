import {Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';

const CustomToggle = ({isAdded, handleTogglePress}) => {
  return (
    <View>
      <TouchableOpacity onPress={handleTogglePress}>
        <View style={styles.toggleContainer}>
          <View style={styles.textContainer}>
            {isAdded ? <Text>등록 취소</Text> : <Text>등록</Text>}
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CustomToggle;
