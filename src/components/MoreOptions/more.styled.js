import styled from "styled-components";

const OptionsComponent = styled.div`
  .svg-container {
    cursor: pointer;
    padding: 5px 10px;
    background: ${(props) => props.theme.colors.CHAT_BG};
    border: 1px solid ${(props) => props.theme.colors.BORDER};
    border-radius: 5px;
  }

  .modal-drop {
    display: flex;
    flex-direction: column;
    padding: 5px 0;
    position: absolute;
    bottom: 0;
    right: 48px;
    background: ${(props) => props.theme.colors.CHAT_BG};
    border: 1px solid ${(props) => props.theme.colors.BORDER};
    border-radius: 5px;
    z-index: 1;

    button {
      width: 100%;
      color: ${(props) => props.theme.colors.WHITE};
      padding: 5px 10px;
      margin: 3px 0;
      background: transparent;
      &:hover {
        background: ${(props) => props.theme.colors.OPTIONS_HOVER_BLUE};
      }
    }
  }
`;

export default OptionsComponent;