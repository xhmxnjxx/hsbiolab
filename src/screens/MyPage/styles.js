import {Dimensions, StyleSheet} from 'react-native';

const width_ratio = Dimensions.get('screen').width / 390;
const height_ratio = Dimensions.get('screen').height / 844;

const styles = StyleSheet.create({
  bodyContainer: {
    paddingVertical: 20 * height_ratio,
    paddingHorizontal: 12 * width_ratio,
    backgroundColor: '#FAFAFA',
  },
});

export default styles;
