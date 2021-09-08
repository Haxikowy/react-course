import React from 'react';

const Loader = ({ text }) => {
   return (
      <div className="ui active inverted dimmer">
         <div className="ui text loader">{text}</div>
      </div>
   );
};

Loader.defaultProps = {
   text: 'Loading...',
};

export default Loader;
