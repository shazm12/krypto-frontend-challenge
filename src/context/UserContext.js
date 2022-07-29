import { createContext, useState, useEffect, useContext } from "react";

// Create Context
const UserContext =createContext({});

// Create Context Provider to let all the other components which are children components
//  to use the states stored in the API
const UserContextProvider = ({ children }) => {
    const [user,setUser] = useState();
    const[cartItems, setCartItems ] = useState([]);

    return(
        <UserContext.Provider value={{ user, setUser, cartItems,setCartItems }}>
            {children}
        </UserContext.Provider>
    );
}

export default UserContextProvider;

// Utility function to directly import the Context and start using it directly
export const useUserContext = () => useContext(UserContext);

