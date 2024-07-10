import {Dimensions, StyleSheet} from 'react-native';

const width_ratio = Dimensions.get('screen').width / 390;
const height_ratio = Dimensions.get('screen').height / 844;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#1677FF',
    paddingVertical: 16 * height_ratio,
    paddingHorizontal: 24 * width_ratio,
  },
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    gap: 16 * width_ratio,
  },
  text: {
    fontSize: 16 * height_ratio,
    fontWeight: 600,
    color: '#ffffff',
  },
});

export default styles;
