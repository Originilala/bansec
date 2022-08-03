import React, {useContext} from 'react';
import logo from '../assets/banana-01.png';
import {useHistory, Link} from 'react-router-dom';
import {AuthContext} from "../AuthContext";

function NavBar() {
    const history = useHistory();
    const {authState, logOut} = useContext(AuthContext);
    console.log(authState);

    return (
        <nav>
            <Link to="/">
          <span className="logo-container">
            <img src={logo} alt="logo"/>
            <h3>
              Banana Security
            </h3>
          </span>
            </Link>

            <div>
                {authState ?
                    <button
                    type="button"
                    onClick={logOut}
                >
                    Log out
                </button> :
                <div>
                    <button
                        type="button"
                        onClick={() => {
                            history.push('/signin');
                        }}
                    >
                        Log in
                    </button>
                    <button
                        type="button"
                        onClick={() => history.push('/signup')}
                    >
                        Registreren
                    </button>
                </div>}
            </div>
        </nav>
    );
}

export default NavBar;