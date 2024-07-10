import {Dimensions, StyleSheet} from 'react-native';
import {ScreenContainer} from 'react-native-screens';

const width_ratio = Dimensions.get('screen').width / 390;
const height_ratio = Dimensions.get('screen').height / 844;

const styles = StyleSheet.create({
  screenContainer: {
    backgroundColor: '#FAFAFA',
    gap: 20 * height_ratio,
  },
  bodyContainer: {
    paddingVertical: 20 * height_ratio,
    paddingHorizontal: 12 * width_ratio,
  },
});

export default styles;
