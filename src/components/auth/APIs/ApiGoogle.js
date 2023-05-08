import React, { useState, useEffect, useContext } from "react";
import { StyledGoogle } from "../../../resources/buttons/Buttons";
import {gapi} from 'gapi-script';
// import {AuthContext} from "../../../Context/AuthContext";

const ApiGoogle = ({ color }) => {
  const [user, setUser] = useState(null);
  const clientId ="696938883956-tupkjer2kvn4cghlotk7781l38bi1n30.apps.googleusercontent.com";
  
  useEffect(() => {
    const start = async () => {
      await gapi.load("auth2", () => {
        gapi.auth2.init({ client_id: clientId });
      });
    };
    start();
  }, []);
  const responseGoogle = async (response) => {
    const user = response.profileObj;
    setUser(user);
    user.tokenObj = response.tokenObj;
    sessionStorage.setItem('user', JSON.stringify(user));
    dashBoardSesion();
  };
  const onFailure = (error) => {
    console.log(error);
  };
  const signOut = async () => {
    const auth2 = await gapi.auth2.getAuthInstance();
    await auth2.signOut();
    setUser(null);
  };
  const dashBoardSesion=()=>{
    window.location.href = "/dashboard";
  }
  return (
    <StyledGoogle
      clientId={clientId}
      buttonText=""
      onSuccess={responseGoogle}
      onFailure={onFailure}
      cookiePolicy={"single_host_origin"}
      scope="profile"
      background={color}
    />
  );
};

export default ApiGoogle;
