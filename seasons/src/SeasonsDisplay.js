import React from 'react';
import './SeasonsDisplay.css';

const ConfigSeason = {
    summer: {
      text: "Lets hit the Beach",
      iconName: 'sun'
    },
    winter: {
        text: "Burr, it is Chilly",
        iconName: 'snowflake'
    }
}

const getSeasons = (lat, month) => {
    if (month > 2 && month < 9) {
        return  lat > 0? "summer" : "winter";
    } else {
        return lat > 0? "winter" : "summer";
    }

};

const SeasonsDisplay = props => {
    const season = getSeasons(props.lat, new Date().getMonth);
    const {text, iconName} = ConfigSeason[season];        
    
    return(
    <div className={`seasons-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`}></i>  
      <h1>{text}</h1> 
      <i className={`icon-right massive ${iconName} icon`}></i>
    </div>
    );

};

export default SeasonsDisplay;