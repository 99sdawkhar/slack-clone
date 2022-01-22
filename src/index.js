import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GlobalStyle from './themes/global-styles';

import { StateProvider } from './StateProvider/StateProvider'; 
import reducer, { initialState } from './StateProvider/reducer';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <StateProvider initialState={initialState} reducer={reducer}>
			<App />
		</StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
