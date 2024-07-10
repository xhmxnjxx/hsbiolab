import {Dimensions, StyleSheet} from 'react-native';

const width_ratio = Dimensions.get('screen').width / 390;
const height_ratio = Dimensions.get('screen').height / 844;

const styles = StyleSheet.create({
  screenContainer: {
    backgroundColor: '#FAFAFA',
    flexDirection: 'column',
    gap: 20 * height_ratio,
    alignItems: 'center',
    paddingVertical: 20 * height_ratio,
  },
  input: {
    borderWidth: 1.5,
    borderColor: '#000000',
    borderRadius: 8,
    width: 250 * width_ratio,
    height: 55 * height_ratio,
    textAlign: 'center',
    fontSize: 16 * height_ratio,
  },
});

export default styles;
