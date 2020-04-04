import React, { Component } from 'react';
import './App.css';

// axios is our new library for ajax calls
import axios from 'axios';

//Import Components
import Header from '../components/Header/Header'
import GalleryList from '../components/GalleryList/GalleryList';


class App extends Component {
  state = {
    galleryList: [],
  }

  componentDidMount() {
    this.getPictures();
  }

  //I wanted to use fetch but the instructions said use axios
  getPictures = () => {
    axios.get('/gallery').then( (response) => {
        console.log(response.data);
        this.setState({galleryList: response.data});
      }).catch( (error) => {
        alert('Bad things happened...');
        console.log('Error on GET gallery', error);
      });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <GalleryList pictures={this.state.galleryList}/>
      </div>
    );
  }
}

export default App;
