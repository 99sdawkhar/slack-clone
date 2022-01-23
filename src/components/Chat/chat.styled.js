import styled from "styled-components";

const ChatContainer = styled.div`
  display: none;
  width: 100%;
  padding: 20px 0;
  background-color: ${(props) => props.theme.colors.CHAT_BG};
  color: ${(props) => props.theme.colors.WHITE};
  
  @media screen and (min-width: 540px) {
    display: block;
  }

  .header {
    padding: 0 20px 10px;
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
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    height: 85vh;
    .chat-data {
      overflow-y: scroll;
      
      /* width */
      /* ::-webkit-scrollbar {
        width: 7px;
      } */

      /* Handle */
      /* ::-webkit-scrollbar-thumb {
        background: #797c7e;
        border-radius: 10px;
      } */
    }
  }

`

export default ChatContainer;