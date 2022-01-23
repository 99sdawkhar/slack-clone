import styled from "styled-components";

const InputComponent = styled.div`
  form {
    textarea {
      width: 96%;
      padding: 20px;
      margin: 10px 20px 0;
      background: transparent;
      border: 1px solid ${(props) => props.theme.colors.WHITE};
      color: ${(props) => props.theme.colors.WHITE};
      background: ${(props) => props.theme.colors.MESSAGE_HOVER};
      border-radius: 5px;
      outline: none;
      resize: none;
    }
    button {
      display: none;
    }
  }
`;

export default InputComponent;
