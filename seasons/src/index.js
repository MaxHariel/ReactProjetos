import React from 'react';
import ReactDOM from 'react-dom';
import SeasonsDisplay from './SeasonsDisplay';
import Spinner from './Spinner';

class App extends React.Component {
    state = {lat: null, errorMessage: null};
     
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat: position.coords.latitude}),   
            err => this.setState({errorMessage: err.message})
           );  
    };

    renderContent() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Erro: {this.state.errorMessage}</div>;
        }

        if (!this.setState.errorMessage && this.state.lat) {
            return <SeasonsDisplay lat={this.state.lat}/>
        }

        return <Spinner message="Please accept request"/>;

    };

    render() {
        return(
            <div className='border red'>
            {this.renderContent()}
            </div>   
        )        
    }

};

ReactDOM.render(<App />, document.querySelector('#root')); 
