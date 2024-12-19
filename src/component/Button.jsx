import React from 'react';

const Button = ({ text  }) => {

  return (
    <button
    className='bg-black text-xl text-white py-2 px-5  border-2 rounded-sm cursor-pointer hover:bg-white hover:text-black hover:border-black hover:border-2  transition-all duration-700 w-fit h-'
    >
      {text}
    </button>
  );
};

export default Button;
