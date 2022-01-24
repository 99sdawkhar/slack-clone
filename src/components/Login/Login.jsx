import React from 'react';
import { getAuth, signInWithPopup } from "firebase/auth";

import { provider } from '../../firebase';

import { useStateValue } from '../../StateProvider/StateProvider';
import { actionTypes } from '../../StateProvider/reducer';

import LoginContainer from './login.styled';

import slackLogo from '../../assets/images/logo.png';

const Login = () => {
  const [{ user }, dispatch] = useStateValue(null);

  const signIn = (e) => {
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        const userInfo = { 
          displayName: result.user.displayName, 
          email: result.user.email, 
          photoURL: result.user.photoURL 
        };
        localStorage.setItem("userInfo", JSON.stringify(userInfo));
        dispatch({
          type: actionTypes.SET_USER,
          user: userInfo
        })
      }).catch((error) => {
        console.log(error);
      });
  }

  return (
    <LoginContainer>
      <figure>
        <img src={slackLogo} alt="Slack Clone Login Page" />
      </figure>
      <h2>Sign to use slack</h2>
      <button onClick={signIn}>Sign In with Google</button>
    </LoginContainer>
  );
};

export default Login;
