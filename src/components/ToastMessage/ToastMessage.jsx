import React from 'react';
import ToastStyle from './toast.styled';

const ToastMessage = () => {
  return (
    <ToastStyle
      position="bottom-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss={false}
      draggable={false}
      pauseOnHover={false}
      closeButton
    />
  );
};

export default ToastMessage;
