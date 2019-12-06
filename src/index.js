import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './store'
import { Provider } from 'react-redux'
import {BrowserRouter as Router, Link , Route} from 'react-router-dom'
import Description from './component/Description';

ReactDOM.render(
    <Provider store={store}  >
        <Router>
        <Route exact path="/" component={App}/>
        <Route path="/description/:id" component={Description}/>
        </Router>
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
