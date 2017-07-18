import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { login, signup, logout} from './actions/session_actions';


document.addEventListener('DOMContentLoaded', () => {
  let store;
  window.login = login;
  if(window.currentUSer){
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});