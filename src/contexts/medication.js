import {createContext, useState} from 'react';

export const MedicationContext = createContext();

const MedicationProvider = ({children}) => {
  const [time, setTime] = useState('11:30');
  const [memo, setMemo] = useState('여의도 성모병원');

  value = {
    state: {
      time,
      memo,
    },
    actions: {
      setTime,
      setMemo,
    },
  };

  return (
    <MedicationContext.Provider value={value}>
      {children}
    </MedicationContext.Provider>
  );
};

export default MedicationProvider;
