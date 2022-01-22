import React from 'react';
import LoginContainer from './login.styled';

import { getAuth, signInWithPopup } from "firebase/auth";
import { provider } from '../../firebase';
import { useStateValue } from '../../StateProvider/StateProvider';
import { actionTypes } from '../../StateProvider/reducer';

const Login = () => {
  const [{ user }, dispatch] = useStateValue(null);

  const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {;
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user
        })
      }).catch((error) => {
        console.log(error);
      });

  return (
    <LoginContainer>
      <figure>
        <img src="https://a.slack-edge.com/80588/marketing/img/icons/icon_slack_hash_colored.png" alt="Slack Clone Login Page" />
      </figure>
      <h2>Sign to use slack</h2>
      <button>Sign In with Google</button>
    </LoginContainer>
  );
};

export default Login;
