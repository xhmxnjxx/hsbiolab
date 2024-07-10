import {Dimensions, StyleSheet} from 'react-native';

const width_ratio = Dimensions.get('screen').width / 390;
const height_ratio = Dimensions.get('screen').height / 844;

const styles = StyleSheet.create({
  screenContainer: {
    backgroundColor: '#FAFAFA',
    flexDirection: 'column',
    gap: 32 * height_ratio,
    alignItems: 'center',
    paddingVertical: 20 * height_ratio,
  },
  titleText: {
    fontSize: 18 * height_ratio,
  },
  userContainer: {
    flexDirection: 'row',
    gap: 12 * width_ratio,
    alignItems: 'center',
  },
  medicationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12 * width_ratio,
  },
  inputContainer: {
    flexDirection: 'column',
    gap: 12 * width_ratio,
    alignItems: 'center',
  },
  input: {
    borderWidth: 1.5,
    borderColor: '#000000',
    borderRadius: 8,
    width: 250 * width_ratio,
    paddingVertical: 12 * height_ratio,
    textAlign: 'center',
    fontSize: 16 * height_ratio,
  },
});

export default styles;
