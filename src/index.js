import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Listing from './pages/listing/Listing';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Listing />, document.getElementById('root'));
registerServiceWorker();
