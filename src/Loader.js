import React from 'react';

const Loader = props => {
   return (
      <div className="ui active dimmer">
         <div className={`ui ${props.size} text loader`}>{props.message}</div>
      </div>
   );
};

Loader.defaultProps = {
   size: 'huge',
   message: 'Loading...',
};

export default Loader;
