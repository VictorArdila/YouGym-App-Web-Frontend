import React from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "./components/layout/LayoutApp";
import App from "./components/app/layout/Layout";
import Landing from "./components/landing/Landing";
import Login from "./components/auth/login/Login";
const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Layout>
          <Landing />
        </Layout>
      </Route>
      <Route exact path="/login">
        <Layout>
          <Login />
        </Layout>
      </Route>
      <Route exact path="/dashboard">
        <Layout>
          <App />
        </Layout>
      </Route>
    </Switch>
  );
};

export default Routes;
