import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'mobx-react';
import ChoiceStore from './stores/ChoiceStore';


ReactDOM.render(
  <Provider choiceStore={ChoiceStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
