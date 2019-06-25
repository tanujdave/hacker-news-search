import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router' // react-router v4/v5
import { ConnectedRouter } from 'connected-react-router'
import configureStore, { history } from './configureStore'
import './index.css';

import Header from './components/Header'
import SearchNews from './components/SearchNews'
import NewsList from './components/NewsList';

import * as serviceWorker from './serviceWorker';

const store = configureStore()

ReactDOM.render(
<div className="app">
  <Provider store={store}>
    <ConnectedRouter history={history}>
        <Switch>
          <Route 
            path="/" name="home"
            render={() => (
                <Fragment>
                    <div className="header">
                        <Header />
                        <SearchNews />
                    </div>
                    <main className="main">
                        <Switch>
                            <Route
                                path="/"
                                name="newsList"
                                component={NewsList} />}
                            />
                        </Switch>
                    </main>
                </Fragment>
            )}
          />
          
        </Switch>
    </ConnectedRouter>
  </Provider>
  </div>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
