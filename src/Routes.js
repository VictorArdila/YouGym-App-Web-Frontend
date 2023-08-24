import React from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "./components/layout/LayoutApp";
import App from "./components/app/layout/Layout";
import Landing from "./components/landing/Landing";
import Auth from "./components/auth/layout/LayoutAuth";
import Login from "./components/auth/login/Login";
import Register from "./components/auth/register/Register";
import Forgot from "./components/auth/forgot/Forgot";
import Content from "./components/app/content/Content";
import DashBoard from "./pages/dashboard/DashBoard";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Layout>
          <Landing />
        </Layout>
      </Route>
      <Route exact path="/Iniciar-sesion">
        <Layout>
          <Auth>
            <Login />
          </Auth>
        </Layout>
      </Route>
      <Route exact path="/registrarme">
        <Layout>
          <Auth>
            <Register />
          </Auth>
        </Layout>
      </Route>
      <Route exact path="/recuperar-contraseña">
        <Layout>
          <Auth>
            <Forgot />
          </Auth>
        </Layout>
      </Route>
      <Route exact path="/dashboard">
        <Layout>
          <App>
            <Content>
              <DashBoard/>
            </Content>
          </App>
        </Layout>
      </Route>
    </Switch>
  );
};

export default Routes;
