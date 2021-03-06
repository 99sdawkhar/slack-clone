import styled from 'styled-components';

const HeaderStyle = styled.header`
  background-color: ${(props) => props.theme.colors.HEADER_BG};
  display: flex;
  justify-content: flex-start;
  max-height: 250px;
  
  @media screen and (min-width: 540px) {
    justify-content: space-between;
  }

  .header-left {
    max-width: 230px;
    width: 20%;
    height: auto;
    margin: auto;
    display: flex;
    align-items: center;
    padding: 10px 0;
  
      /* @media screen and (min-width: 540px) {
        justify-content: space-between;
      } */

    figure {
      max-width: 30px;
      margin: 0 auto;
    }
  }

  .header-right {
    display: none;
    @media screen and (min-width: 540px) {
      width: 80%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
  }

  svg {
    color: ${(props) => props.theme.colors.HEADER_ICONS};
  }

  .header-search {
    width: 70%;
    background: ${(props) => props.theme.colors.SEARCH_BG};
    display: flex;
    margin: 5px 0 5px 3%;
    padding: 5px 10px;
    border-radius: 4px;
    border: 1px solid ${(props) => props.theme.colors.BORDER};
    input {
      width: 100%;
      border: none;
      outline: none;
      background: ${(props) => props.theme.colors.SEARCH_BG};
      color: ${(props) => props.theme.colors.WHITE};
    }
    svg {
      align-self: flex-end;
    }
  }
  .help {
    margin-left: auto;
    margin-right: 1%;
  }
 `
export default HeaderStyle