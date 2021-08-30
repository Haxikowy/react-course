import './DisplaySeason.css';
import React from 'react';

const seasonConfig = {
   summer: {
      text: "Let's hit the beach!",
      iconName: 'sun',
      color: '',
   },
   winter: {
      text: "Burr it's chilly!",
      iconName: 'snowflake',
   },
};

const getSeason = (lat, month) => {
   if (month > 2 && month < 9) {
      return lat > 0 ? 'summer' : 'winter';
   } else {
      return lat > 0 ? 'winter' : 'summer';
   }
};

const DisplaySeason = props => {
   const season = getSeason(props.lat, new Date().getMonth());
   const { text, iconName } = seasonConfig[season];

   return (
      <div className={`display-season ${season}`}>
         <i className={`massive ${iconName} icon icon-left`}></i>
         <h1>{text}</h1>
         <i className={`massive ${iconName} icon icon-right`}></i>
      </div>
   );
};

export default DisplaySeason;
