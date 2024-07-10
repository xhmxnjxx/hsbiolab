import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

const MedicationRoutineCard = ({isAdded, name, time, memo}) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.upperContainer}>
        <Text style={styles.nameText}>{name}님,</Text>
        <View style={styles.guidanceContainer}>
          {isAdded ? ( // 루틴이 등록된 경우
            <>
              <Text style={styles.guidanceWeightedBlackText}>오늘은 </Text>
              <Text style={styles.guidanceWeightedNotifyText}>투석날</Text>
              <Text style={styles.guidanceNornalText}>이에요.</Text>
            </>
          ) : (
            // 루틴이 등록되지 않은 경우
            <Text style={styles.guidanceNornalText}>혹시 투석중이신가요?</Text>
          )}
        </View>
        {!isAdded && ( // 루틴이 등록되지 않은 경우
          <Text style={styles.guidanceNormalBlackText}>
            투석 루틴을 등록하시면 투석날을 관리할 수 있어요.
          </Text>
        )}
      </View>
      <View style={isAdded ? styles.lowerContainer : styles.blurContainer}>
        {/* 루틴 등록 여부에 따른 opacity 적용 */}
        <View style={styles.timeOuterContainer}>
          <FontAwesome5Icon name="hospital" size={25} color="#4096FF" />
          <View style={styles.timeInnerContainer}>
            <Text style={styles.contentWeightedText}>투석</Text>
            {isAdded ? (
              <Text style={styles.contentNormalText}>오전 {time}</Text>
            ) : (
              <Text style={styles.contentNormalText}>오전 11:30</Text>
            )}
          </View>
        </View>
        <View style={styles.memoContainer}>
          <Text style={styles.contentWeightedText}>메모</Text>
          <Text style={styles.contentNormalText}>{memo}</Text>
        </View>
      </View>
    </View>
  );
};

export default MedicationRoutineCard;
