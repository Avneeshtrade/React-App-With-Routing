import React, { Component, useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import './App.css';
import { routes } from './routes';
import { getToken } from './utilities/getToken';

const App =()=> {
  const [state,setState] = useState({isLoggedIn:false})
    return (
      <Router>
        <div className="App">
          <ul className="App-header">
            {
              // (state.isLoggedIn?routes.guest:routes.guest.filter(r=>r.title === 'login')).map(r => (
              //   <li>
              //     {
                   
              //       <Link key={r.key} to={r.path}>{r.title.toUpperCase()}</Link>
                    
              //     }
                  
              //   </li>
              // ))
            }
          </ul>

          <Switch>
            {

              routes.guest.map(r => (
                <Route key={r.key} exact={r.exact} path={r.path} component={(props)=><r.component {...props} />}></Route>
              ))
            }
            <Route>
              <Redirect to='/login' />
            </Route>
          </Switch>

        </div>
      </Router>
    );
}

export default App;

