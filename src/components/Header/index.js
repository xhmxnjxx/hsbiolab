import {Text, View} from 'react-native';
import styles from './styles';
import IonIcon from 'react-native-vector-icons/Ionicons';

const CustomHeader = ({date}) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.itemContainer}></View>
      <View style={styles.itemContainer}>
        <Text style={styles.text}>{date}</Text>
      </View>
      <View style={styles.itemContainer}>
        <IonIcon name="calendar" size={25} color="#ffffff" />
        <IonIcon name="person" size={25} color="#ffffff" />
      </View>
    </View>
  );
};

export default CustomHeader;
