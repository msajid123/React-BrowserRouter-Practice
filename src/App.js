import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Directory from './Directory';
import Profile from './Profile';
import {Switch,Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
    <Header />
    <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/Directory" component={Directory}></Route>
    <Route path="/Directory/:id" component={Profile}></Route>
    </Switch>
    </div>
  );
}
export default App;
