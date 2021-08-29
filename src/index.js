import React from 'react';
import ReactDOM from 'react-dom';
import DisplaySeason from './DisplaySeason';
import Loader from './Loader';

class App extends React.Component {
   state = {
      lat: null,
      errorMessage: null,
   };
   componentDidMount() {
      window.navigator.geolocation.getCurrentPosition(
         position => this.setState({ lat: position.coords.latitude }),
         err => this.setState({ errorMessage: err.message })
      );
   }

   renderContent() {
      if (this.state.lat && !this.state.errorMessage) {
         return <DisplaySeason lat={this.state.lat} />;
      } else if (!this.state.lat && this.state.errorMessage) {
         return <div>{this.state.errorMessage}</div>;
      } else {
         return <Loader message="Please accept location request" />;
      }
   }

   render() {
      return <div>{this.renderContent()}</div>;
   }
}
