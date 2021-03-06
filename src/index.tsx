import 'default.css';
import store from 'features';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from 'router/App';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
