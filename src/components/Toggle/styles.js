import {Dimensions, StyleSheet} from 'react-native';

const width_ratio = Dimensions.get('screen').width / 390;
const height_ratio = Dimensions.get('screen').height / 844;

const styles = StyleSheet.create({
  toggleContainer: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    paddingVertical: 12 * height_ratio,
    paddingHorizontal: 24 * width_ratio,
    backgroundColor: 'lightgray',
    borderRadius: 8 * height_ratio,
  },
});

export default styles;
