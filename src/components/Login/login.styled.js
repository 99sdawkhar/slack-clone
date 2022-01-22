import styled from "styled-components";

const LoginContainer = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: auto;
  height: 100vh;

  figure {
    align-self: center;
    max-width: 70px;
    width: 100%;
    height: auto;
    margin-bottom: 40px;
  }
  h2 {
    font-size: 25px;
    font-weight: 600;
    margin-bottom: 20px;
    color: ${(props) => props.theme.colors.HEADER_BG}
  }
  button {
    max-width: 400px;
    width: 20%;
    padding: 10px;
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.GOOGLE_AUTH};
    border: none;
    outline: none;
    border-radius: 5px;
  }
`

export default LoginContainer;