import {Dimensions, StyleSheet} from 'react-native';

const width_ratio = Dimensions.get('screen').width / 390;
const height_ratio = Dimensions.get('screen').height / 844;

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    paddingVertical: 12 * height_ratio,
    paddingHorizontal: 24 * width_ratio,
    backgroundColor: '#D4DDEB',
    borderRadius: 8,
  },
});

export default styles;
