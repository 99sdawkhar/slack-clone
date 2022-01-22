import styled from 'styled-components'

const MessageContainer = styled.div`
  display: flex;

  figure {
    max-width: 35px;
    max-height: 35px;
    flex-basis: 15%;
    margin-right: 10px;
    border: 1px solid #000;
    border-radius: 3px;
  }
  .content {
    width: 100%;
    font-size: 16px;
    .user-data {
      margin-bottom: 8px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      h4 {
        padding-right: 10px;
        font-weight: 600;
      }

      span {
        font-size: 12px;
        color: ${(props) => props.theme.colors.ICON_COLOR};
      }
    }
  }
`
export default MessageContainer