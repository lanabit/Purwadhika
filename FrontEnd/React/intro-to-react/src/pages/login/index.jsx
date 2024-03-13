import './login.styles.css';
import styled from 'styled-components';
import Button from '../../components/cores/Button'

function LoginPage(){

  return (
    <>
      <h1>
        Login Page
      </h1>
      <Button text='Login' page='login'/>
    </>
  )
}

export default LoginPage;