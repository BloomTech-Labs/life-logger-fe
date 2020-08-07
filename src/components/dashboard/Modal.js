/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useEffect, createRef } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { useDetectOutsideClick } from '../../hooks/useDetectOutsideClick';

import { IoMdClose } from 'react-icons/io';

// referenced from https://medium.com/@seif_ghezala/how-to-create-an-accessible-react-modal-5b87e6a27503
const Modal = ({ children, onClose, showX = true, overrideStyles = {} }) => {
  const modalRef = createRef();
  useDetectOutsideClick(modalRef, onClose);

  // trap the focus inside the modal while it's open
  const handleTabKey = (e) => {
    const focusableModalElements = [
      ...modalRef.current.querySelectorAll(
        'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
      ),
    ];

    const firstElement = focusableModalElements[0];
    const lastElement =
      focusableModalElements[focusableModalElements.length - 1];

    // if tabbing "forwards" and the current active element is the last one, loop back to the first element in the modal
    if (
      (!e.shiftKey && document.activeElement === lastElement) ||
      !focusableModalElements.includes(document.activeElement)
    ) {
      firstElement.focus();
      return e.preventDefault();
    }

    // if tabbing "backwards" and the current active element is the first one, loop back to the last element in the modal
    if (e.shiftKey && document.activeElement === firstElement) {
      lastElement.focus();
      e.preventDefault();
    }
  };

  useEffect(() => {
    const keyListener = (e) => {
      const listener = keyListenersMap.get(e.key);

      return listener && listener(e);
    };

    // add event listener on componentDidMount
    document.addEventListener('keydown', keyListener);

    // remove event listener on componentWillUnmount
    return () => document.removeEventListener('keydown', keyListener);
  }, []);

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
  // helps us keep track of the different keys we want to listen for
  // then whenever a key is pressed, we look for the corresponding
  // listener in our map (after creating event listeners in our useEffect)
  const keyListenersMap = new Map([
    ['Escape', onClose],
    ['Tab', handleTabKey],
  ]);

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      sx={{
        position: `absolute`,
        zIndex: `3`,
        top: `0`,
        left: `0`,
        width: `100vw`,
        height: `100vh`,
        overflow: `hidden`,
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
        backgroundColor: `rgba(158, 158, 158, 0.75)`,
        padding: `3rem 1rem`,
      }}
    >
      <div
        ref={modalRef}
        sx={{
          padding: `1rem`,
          margin: `0 auto`,
          width: `100%`,
          height: `100%`,
          bg: `background`,
          ...overrideStyles,
        }}
      >
        {showX && (
          <button
            onClick={onClose}
            sx={{
              bg: `background`,
              border: `none`,
              width: `45px`,
              height: `45px`,
              display: `flex`,
              alignItems: `center`,
              justifyContent: `center`,
              cursor: `pointer`,
            }}
          >
            <IoMdClose
              sx={{
                fontSize: `1.25rem`,
              }}
            />
          </button>
        )}
        {children}
      </div>
    </div>,
    document.body
  );
};

Modal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

export default Modal;
