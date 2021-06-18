
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

// import work page
import App from './App';
import ScrollToTop from './components/ScrollToTop';

// service worker
import * as serviceWorker from './serviceWorker';

// render page
ReactDOM.render(
    <Router>
        <ScrollToTop>
            <App />
        </ScrollToTop>
    </Router>,
    document.getElementById('root')
);
serviceWorker.unregister();

