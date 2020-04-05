// import need to use jsx
import React, { Component } from 'react';

//Import GalleryItem to use when creating each image
import GalleryItem from '../GalleryItem/GalleryItem';

//Import styling
import './GalleryList.css'

class GalleryList extends Component{
    render() {
        return(
            <div className='wrapper'>
                {
                    this.props.list.map((picture) => {
                        return(
                            <GalleryItem picture={picture} key={picture.id} updateLikes={this.props.updateLikes}/>
                        );
                    })
                }
            </div>
        );
    }
}

export default GalleryList;