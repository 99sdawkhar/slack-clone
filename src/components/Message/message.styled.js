import styled from 'styled-components'

const MessageContainer = styled.li`
  display: flex;
  padding: 7px 20px;
  position: relative;

  &:hover {
    background: ${(props) => props.theme.colors.MESSAGE_HOVER};
  }

  figure {
    max-width: 35px;
    max-height: 35px;
    flex-basis: 15%;
    margin-right: 10px;
    border-radius: 3px;
  }
  .content {
    width: 100%;
    font-size: 16px;
    .user-data {
      margin-bottom: 8px;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;

      h4 {
        padding-right: 10px;
        font-weight: 600;
        font-family: Codec-Pro-Bold, sans-sarif;
      }

      span {
        font-size: 12px;
        color: ${(props) => props.theme.colors.ICON_COLOR};
      }

      .helper-txt {
        @media screen and (max-width: 540px) {
          display: flex;
          flex-direction: column;
        }
        .edited {
          margin-left: 3px;
          margin-top: 1px;
          align-self: flex-end;
        }
      }
    }
  }
`
export default MessageContainer