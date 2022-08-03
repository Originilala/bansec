
import React, {useState} from "react";
import {useHistory} from "react-router-dom";

export const AuthContext = React.createContext(null);

function AuthContextProvider({children}) {
    const [isAuth, toggleIsAuth] = useState(false);
    const history = useHistory();

    console.log(isAuth);
    const logIn = () => {
        toggleIsAuth(true);
        console.log(isAuth);
        console.log("logged in");
        history.push('/profile');
    }
    const logOut = () => {
        toggleIsAuth(false);
        console.log("logged out")
    }

    const contextObj = {
        isAuth: isAuth,
        login: logIn,
        logout: logOut,
    };

    return (
        <AuthContext.Provider value={contextObj}>
            {children}
        </AuthContext.Provider>

    );
}

export default AuthContextProvider;