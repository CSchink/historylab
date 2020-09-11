import React from 'react'
import { hasToken } from '../util/tokenutil';
import history from '../util/historyutil';

const AuthContext = React.createContext()
function AuthProvider(props) {

  const [loggedIn, setloggedIn] = React.useState(hasToken());
  const login = (token) => { 
    sessionStorage.setItem("token", token)
    setloggedIn(true)
    
    // history.push('/data')
    } 
  const logout = () => { 
      setloggedIn(false)
      // sessionStorage.removeItem('token');
      sessionStorage.clear();

    //   history.push('/') 
} 

// clear the token in localStorage and the user data
  // note, I'm not bothering to optimize this `value` with React.useMemo here
  // because this is the top-most component rendered in our app and it will very
  // rarely re-render/cause a performance problem.
  return (
    <AuthContext.Provider value={{loggedIn, login, logout}} {...props} />
  )
}
const useAuth = () => React.useContext(AuthContext)
export {AuthProvider, useAuth}
