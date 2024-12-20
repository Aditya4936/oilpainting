  import React from 'react';

  const Button = ({ text  }) => {

    return (
      <button
      className='button'
      >
     <span  className='button-content '>{text}
      </span>   
      </button>
    );
  };

  export default Button;
