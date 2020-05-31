import React from 'react';
import './App.css';
import IndexPage from "../../pages/IndexPage";
import ContactPage from "../../pages/ContactPage";
import {Route, Switch} from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { useTheme } from '@material-ui/core/styles';
import {CssBaseline} from "@material-ui/core";
import LoginPage from "../../pages/LoginPage";

function App() {
  const theme = useTheme()
  return (
    <div className="App">
      <CssBaseline />
      <AppBar>
        <Toolbar></Toolbar>
      </AppBar>
      <div style={{marginTop: '100px'}}>
        <Switch>
          <Route path="/contact" component={ContactPage}/>
          <Route path="/login" component={LoginPage}/>
          <Route path="/" component={IndexPage}/>
        </Switch>
      </div>
    </div>
  )
}

export default App;
