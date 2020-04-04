// import need to use jsx
import React from 'react';

const GalleryItem = ({title, path, description, likes}) => {
	return(
		<div>
            <img alt={description} src={path}/>
            <div>
                <h2>{title}</h2>
                <button>Love it!</button>
                <p>{likes} people love this!</p>
            </div>
        </div>
	);
}

export default GalleryItem;