import {Dimensions, StyleSheet} from 'react-native';

const width_ratio = Dimensions.get('screen').width / 390;
const height_ratio = Dimensions.get('screen').height / 844;

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'column',
    borderRadius: 8,
    paddingVertical: 24 * height_ratio,
    paddingHorizontal: 24 * width_ratio,
    justifyContent: 'center',
    gap: 24 * height_ratio,
    backgroundColor: '#FFFFFF',
  },
  upperContainer: {
    flexDirection: 'column',
    gap: 2 * height_ratio,
  },
  nameText: {
    fontSize: 12 * height_ratio,
    fontWeight: 600,
  },
  guidanceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  guidanceWeightedBlackText: {
    fontSize: 16 * height_ratio,
    fontWeight: 600,
  },
  guidanceWeightedNotifyText: {
    fontSize: 16 * height_ratio,
    fontWeight: 600,
    color: '#FF4D4F',
  },
  guidanceNormalBlackText: {
    fontSize: 12 * height_ratio,
  },
  lowerContainer: {
    flexDirection: 'column',
    gap: 12 * height_ratio,
  },
  blurContainer: {
    flexDirection: 'column',
    gap: 12 * height_ratio,
    opacity: 0.3,
  },
  timeOuterContainer: {
    flexDirection: 'row',
    paddingRight: 10 * width_ratio,
    alignItems: 'center',
    gap: 10 * width_ratio,
  },
  timeInnerContainer: {
    height: '100%',
    gap: 4 * width_ratio,
  },

  memoContainer: {
    flexDirection: 'row',
    gap: 8 * width_ratio,
    alignItems: 'center',
  },

  contentWeightedText: {
    fontSize: 12 * height_ratio,
    fontWeight: 600,
  },
  contentNormalText: {
    fontSize: 12 * height_ratio,
  },
});

export default styles;
