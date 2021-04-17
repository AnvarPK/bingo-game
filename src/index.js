import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import configureSote from './redux/configStore';
import './index.scss';
import App from './App';

const store = configureSote();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
