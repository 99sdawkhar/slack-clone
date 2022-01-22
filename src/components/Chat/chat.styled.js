import styled from "styled-components";

const ChatContainer = styled.div`
  display: none;
  width: 100%;
  padding: 20px;
  background-color: ${(props) => props.theme.colors.CHAT_BG};
  color: ${(props) => props.theme.colors.WHITE};
  
  @media screen and (min-width: 540px) {
    display: block;
  }

  .header {
    display: flex;
    justify-content: space-between;
    font-size: 20px;
    font-weight: 600;
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
      svg {
        padding-right: 7px;
      }
    }
  }

  .chat-body {
    /* display: flex;
    flex-direction: column;
    height: 90vh; */
    /* justify-content: flex-end;
    align-items: flex-end; */
  }

`

export default ChatContainer;