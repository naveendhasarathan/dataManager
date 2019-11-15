import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import Dataview from './public/dataview/dataview';

import Dataview from './dataview/tablepage';
import Basepage from './Base/basepage';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Basepage/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
