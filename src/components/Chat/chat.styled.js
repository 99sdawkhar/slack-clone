import styled from "styled-components";

const ChatContainer = styled.div`
  width: 100%;
  padding-bottom: 20px;
  background-color: ${(props) => props.theme.colors.CHAT_BG};
  border-left: 1px solid ${(props) => props.theme.colors.BORDER};
  color: ${(props) => props.theme.colors.WHITE};
  @media screen and (max-width: 540px) {
    height: 100vh;
  }

  .header {
    padding: 20px 20px 19px;
    display: flex;
    justify-content: space-between;
    font-size: 20px;
    font-weight: 600;
    border-top: 1px solid ${(props) => props.theme.colors.BORDER};
    border-bottom: 1px solid ${(props) => props.theme.colors.BORDER};
    @media screen and (min-width: 992px) {
      padding: 16px 20px 16px;
    }
    @media screen and (min-width: 768px) {
      padding: 16px 20px 16px;
    }

    .back-arrow {
      width: 20px;
      padding-right: 1%;
      background: transparent;
      border: none;
      outline: none;
      cursor: pointer;
      svg {
        color: ${(props) => props.theme.colors.WHITE};
      }
    }
    .header-left {
      cursor: pointer;
      display: flex;
      justify-content: flex-start;
      h3 {
        padding-right: 7px;
      }
    }

    .header-right {
      cursor: pointer;
      display: none;

      @media screen and (min-width: 540px) {
        display: block;
      }
      svg {
        padding-right: 7px;
      }
    }
  }

  .chat-body {
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    height: 85vh;
    .chat-data {
      overflow-y: scroll;
    }
  }

`

export default ChatContainer;