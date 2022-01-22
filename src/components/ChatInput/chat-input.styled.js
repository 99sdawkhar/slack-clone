import styled from "styled-components";

const InputComponent = styled.div`
  /* position: relative; */
  form {
    textarea {
      /* position: fixed;
      bottom: 20px;
      right: 10px; */
      width: 80%;
      padding: 20px;
      background: transparent;
      border: 1px solid ${(props) => props.theme.colors.WHITE};
      color: ${(props) => props.theme.colors.WHITE};
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
