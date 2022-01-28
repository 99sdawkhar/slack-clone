import styled from "styled-components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ToastStyle = styled(ToastContainer)`
  @media screen and (max-width: 540px) {
    width: 90vw;
    margin: 0 auto;
    bottom: 15%;
    left: 50%;
    transform: translateX(-50%);
  }

  .Toastify__toast {
    background: ${(props) => props.theme.colors.HEADER_BG};
    color: ${(props) => props.theme.colors.WHITE};
  }

  .Toastify__progress-bar {
    background: ${(props) => props.theme.colors.WHITE};
  }

  .Toastify__close-button {
    color: ${(props) => props.theme.colors.WHITE};
  }

  .Toastify__close-button:hover,
  .Toastify__close-button:focus {
    color: ${(props) => props.theme.colors.ICON_COLOR};
  }
`;

export default ToastStyle;
