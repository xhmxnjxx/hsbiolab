import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#1677FF',
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    gap: 16,
  },
  text: {
    fontSize: 16,
    fontWeight: 600,
    color: '#ffffff',
  },
});

export default styles;
