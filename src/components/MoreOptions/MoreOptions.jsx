import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV  } from '@fortawesome/free-solid-svg-icons';
import OptionsComponent from './more.styled';
import useOnClickOutside from '../../hooks/useOutsideHook';

const MoreOptions = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  
  const ref = useRef();
  useOnClickOutside(ref, () => setShowModal(false));

  const toggleModal = () => setShowModal((prev) => !prev);

  return (
    <OptionsComponent ref={ref}>
      <div 
        className="svg-container" 
        onClick={toggleModal}
      >
        <FontAwesomeIcon 
          icon={faEllipsisV}
        />
        </div>
      {showModal && (
        <div className="modal-drop">
          {children}
        </div>
      )}
  </OptionsComponent>
  )
};

export default MoreOptions;
