
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

// import work page
import App from './App';
import ScrollToTop from './components/ScrollToTop';

// service worker
import * as serviceWorker from './serviceWorker';

import ReactGA from 'react-ga';

ReactGA.initialize(process.env.GA_ID);

// render page
ReactDOM.render(
    <Router>
        <ScrollToTop>
            <App />
            {console.log("%cMade with love in Montreal \n By Ulysse Corbeil \n For Jézabel", "background-color: black; color: white; padding: 15px;")}
            {console.log("%cLinkedIn -> https://www.linkedin.com/in/ulysse-corbeil/", " padding: 15px;")}
        </ScrollToTop>
    </Router>,
    document.getElementById('root')
);
serviceWorker.unregister();

