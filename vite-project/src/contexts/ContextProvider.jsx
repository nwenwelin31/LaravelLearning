import { createContext, useContext, useState } from "react";
import PropTypes from 'prop-types';

const StateContext = createContext({
  user: null,
  token: null,
  setUser: () =>{},
  setToken: () => {},
})

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState({name:'John'});
  const [token, _setToken] = useState(null);
  const setToken = (token) => {
    _setToken(token);
    if(token){
      localStorage.setItem('ACCESS_TOKEN', token);
    }
    else{
      localStorage.removeItem('ACCESS_TOKEN');
    }
  }
  return(
    <StateContext.Provider value={{
      user,
      token,
      setUser,
      setToken
    }}>
      {children}
    </StateContext.Provider>
  )
}
// Add PropTypes validation
ContextProvider.propTypes = {
  children: PropTypes.node.isRequired
};
export const useStateContext = () => useContext(StateContext)
