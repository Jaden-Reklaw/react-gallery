import React, { Component } from 'react';
import './App.css';

//Import Components
import Header from '../components/Header/Header'
import GalleryItem from '../components/GalleryItem/GalleryItem';

class App extends Component {
  state = {
    gallery: [],

  }

  render() {
    return (
      <div className="App">
        <Header />
        
        <GalleryItem />
      </div>
    );
  }
}

export default App;
