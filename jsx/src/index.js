import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    const buttonText = {text: "Click aqui"};
    const labelButton = "Nome";
    return(
     <div>
        <label className="name" for='name'>{labelButton}</label>
        <input id="name"/>
        <button style={{backgroundColor:'blue', color:'white'}}>{buttonText.text}</button>

     </div>
     );
};

ReactDOM.render(<App/>, document.querySelector('#root'));