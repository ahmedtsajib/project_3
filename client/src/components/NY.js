import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';

class NY extends Component {
   constructor(props) {
    super(props); 
      this.state = {
        city: this.props.currCity,
        zip: '',
        min_temp: '',
        max_temp: '',
        desc: '',
        curr_temp: '',
        apiDataLoaded: false
      } 
  }
  

componentDidMount() {
  fetch(`http://api.openweathermap.org/data/2.5/weather?zip=10025,us&units=imperial&appid=54885ece079c87bb919af1bdcdf3be16`)
  .then((response) => {
    return response.json();
  }).then((jsonResponse) => {
    console.log(jsonResponse.main.temp);
    console.log('test');
    this.setState({
      city: jsonResponse.name,
      min_temp: Math.floor ((jsonResponse.main.temp_min )),
      max_temp: Math.floor  ((jsonResponse.main.temp_max )),
      curr_temp: Math.floor (( jsonResponse.main.temp)),
      desc: jsonResponse.weather[0].description,
      apiDataLoaded: true,
    })
  })
}


  render() {
    console.log(this);
    return (
      <div className='ny'>
      <Header  city={this.state.city} min={this.state.min_temp} max={this.state.max_temp} temp={this.state.curr_temp} desc={this.state.desc}/>
       <h1>Hello, {this.props.name}!</h1>
       <Footer />
      </div>
    );
  };
}

export default NY;