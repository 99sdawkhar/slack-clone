import styled from "styled-components";

const IconContainer = styled.div`
  display: flex;
  justify-content: 'flex start';
  padding: 10px 15px;
  color: ${(props) => props.theme.colors.ICON_COLOR};
  font-size: 22px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    padding: 7px 15px;
  }

  svg { width: 20px !important; }
  
  h3 {
    padding-left: 20px;
  
    @media screen and (min-width: 768px) {
      padding-left: 5px;
    }
  }
`
export default IconContainer;