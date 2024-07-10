import {createContext, useState} from 'react';

export const MetricsContext = createContext();

const MetricsProvider = ({children}) => {
  value = {
    state: {},
    actions: {},
  };

  return (
    <MetricsContext.Provider value={value}>{children}</MetricsContext.Provider>
  );
};

export default MetricsProvider;
