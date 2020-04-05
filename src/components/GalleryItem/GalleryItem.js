// import need to use jsx
import React, { Component } from 'react';

//Import style
import './GalleryItem.css'

class GalleryItem extends Component {
    state = {
        showDescription: false,
    }

    //Toggle description - image is click make true or vice versa
    toggleDescription = (event) => {
        this.setState({showDescription: !this.state.showDescription});
    }

    //Conditional render for when a picture is clicked on to 
    //see a description
    showImageOrDescription = () => {
        //needs to return JSX
        if(this.state.showDescription) {
          return (
            <div className='description-box' onClick={this.toggleDescription}>
                <p>{this.props.picture.description}</p>
            </div>
          );
        } else {
          return <img onClick={this.toggleDescription} alt={this.props.picture.description} src={this.props.picture.path}/>;
        }
      }

      displayedLikeMessage = (picture) => {
          //needs to return JSX
          if(this.props.picture.likes < 1) {
            return <p>No one loves this photo yet <span role="img" aria-label="	DISAPPOINTED FACE">😞</span></p>;
          } else {
            return <p>{this.props.picture.likes} people love this!</p>;
          }
      }
      

    render() {
        let picture = this.props.picture;
        return(
            <div className="card">
                {this.showImageOrDescription()}
                <div className="container">
                    <h2>{picture.title}</h2>
                    <button onClick={ (event) => this.props.updateLikes(picture)}>Love it!</button>
                    {this.displayedLikeMessage()}
                </div>
            </div>
        );
    }
}

export default GalleryItem;