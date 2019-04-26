import React from 'react';


const ComponentDetail = props => {
    return (
        <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src={props.avatar}></img>
        </a> 

        <div className="content">
          <a href="/" className="author">
           {props.author}
          </a>
         <div className="metadata">
             {props.metadata}
         </div>
         <div className="text">{props.text}</div>
     </div>
    </div> 
    );
};

export default ComponentDetail;