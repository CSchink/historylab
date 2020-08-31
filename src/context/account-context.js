import React, { useState } from "react";

const AccountContext = React.createContext();

function AccountProvider(props) {
  const [state, setState] = useState(JSON.parse(sessionStorage.getItem("account")) ?? {});
  
  function setAccount(account){ // [Object object]
    sessionStorage.setItem("account", JSON.stringify(account));
    setState(account);
  }

  return(
      <AccountContext.Provider value={{account: state, setAccount}} {...props} />
  )
}

const useAccount = () => React.useContext(AccountContext)

export {useAccount, AccountProvider}