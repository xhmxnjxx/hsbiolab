import {createContext, useState} from 'react';

export const UserContext = createContext();

const UserProvider = ({children}) => {
  const [name, setName] = useState('김소영');

  value = {
    state: {
      name,
    },
    actions: {
      setName,
    },
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserProvider;
