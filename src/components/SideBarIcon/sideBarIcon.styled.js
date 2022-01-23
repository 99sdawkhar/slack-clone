import styled from "styled-components";

const IconContainer = styled.div`
  display: flex;
  justify-content: 'flex start';
  padding: 10px 15px;
  cursor: pointer;
  color: ${(props) => props.theme.colors.ICON_COLOR};
  font-size: 22px;
  transition: 0.2s all ease-in-out;

  &:hover {
    background: ${(props) => props.theme.colors.HOVER_SIDEBAR_BG};
  }

  @media screen and (min-width: 540px) {
    font-size: 16px;
    padding: 7px 15px;
  }

  svg { width: 20px !important; }
  
  span {
    width: 20px;
    padding-left: 5px;
    display: inline-block;
  }

  h3 {
    padding-left: 20px;
  
    @media screen and (min-width: 540px) {
      padding-left: 5px;
    }
  }
`
export default IconContainer;