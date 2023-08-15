import React, {useState} from 'react';
import {Button} from '../../../resources/buttons/Buttons';
import {Icon} from '../../../resources/icons/Icons';
import Input from '../../../resources/inputs/Input';
import Label from '../../../resources/labels/Label';
import { logoPNG, fondoGYM } from '../../../assets/Assets';
import {
  Container,
  MainContainer,
  WelcomeText,
  InputContainer,
  ButtonContainer,
  LoginWith,
  HorizontalRule,
  IconsContainer,
  HiperLink,
  LabelYouGym,
} from './LoginStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import ApiGoogle from "../APIs/ApiGoogle";

const Login = ({ children }) => {
  const FacebookBackground =
    'linear-gradient(to right, #0546A0 0%, #0546A0 40%, #663FB6 100%)';
  const GoogleBackground =
    'linear-gradient(to right, #FFFFFF 0%, ##FFFFFF 40%, ##FFFFFF 100%)';
  const TwitterBackground =
    'linear-gradient(to right, #56C1E1 0%, #35A9CE 50%)';
  const labelYouGym = 'linear-gradient(to right, #7D0000 0%, #000000 50%)';
  return (
    <Container style={{ backgroundImage: `url(${fondoGYM})` }}> 
      <MainContainer>
        <img src={logoPNG} alt='logo' />
        <WelcomeText>Inicio de sesion</WelcomeText>
        <InputContainer>
          <Input name='username' type='text' placeholder='Email' />
          <Input type='password' placeholder='Password' />
          <HiperLink style={{ marginBottom: '0.5rem' }}>
            ¿Olvidaste tu contraseña?
          </HiperLink>
        </InputContainer>
        <ButtonContainer>
          <Button content='Iniciar' />
        </ButtonContainer>
        <LoginWith>O INICIA CON</LoginWith>
        <HorizontalRule />
        <IconsContainer>
          {/* <Icon color={FacebookBackground}>
            <FontAwesomeIcon icon={faFacebook} />
          </Icon> */}
          <ApiGoogle color={GoogleBackground} />
          {/* <Icon color={TwitterBackground}>
            <FontAwesomeIcon icon={faTwitter} />
          </Icon> */}
        </IconsContainer>
        <HiperLink>¿No tienes cuenta? crea una</HiperLink>
        <LabelYouGym>
          <Label color={labelYouGym}>
            <h5>YouGym App</h5>
          </Label>
        </LabelYouGym>
      </MainContainer>
    </Container>
  );
};

export default Login;
