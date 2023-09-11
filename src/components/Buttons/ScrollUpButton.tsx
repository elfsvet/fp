import React from 'react';
import { FaArrowUp } from 'react-icons/fa';
import scrollToTop from '../utils/scrollToTop';

const ScrollUpButton = () => {
  return (
    <button
      className='fixed bottom-0 left-0 rounded-full m-2  p-2.5 bg-fp/50 hover:bg-fp/40 focus-visible:outline focus-visible:outline-2 text-white focus-visible:outline-offset-2 focus-visible:outline-fp'
      onClick={scrollToTop}
    >
      <FaArrowUp />
    </button>
  );
};

export default ScrollUpButton;
