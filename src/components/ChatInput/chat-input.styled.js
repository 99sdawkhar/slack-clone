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
      @media screen and (max-width: 540px) {
        width: 88%;
      }
    }
    .message-box {
      display: flex;
      justify-content: flex-end;
      button {
        padding: 5px 10px;
        color : ${(props) => props.theme.colors.WHITE};
        border-radius: 5px;
        font-weight: 600;
      }
      .cancel {
        border: 1px solid ${(props) => props.theme.colors.BORDER};
        background: ${(props) => props.theme.colors.SIDEBAR_BG};
        margin-right: 5px;
        &:hover {
          background: ${(props) => props.theme.colors.HOVER_SIDEBAR_BG};
        }
      }
      .save {
        background: ${(props) => props.theme.colors.SAVE_BTN_GREEN};
        margin-right: 5px;
        &:hover {
          background: ${(props) => props.theme.colors.SAVE_BTN_GREEN_HOVER};
        }
      }
    }
  }
`;

export default InputComponent;
