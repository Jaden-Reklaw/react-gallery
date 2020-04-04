// import need to use jsx
import React from 'react';

const GalleryItem = () => {
	return(
		<div>
            <img alt='my gallery' src='images/goat_small.jpg'/>
            <div>
                <h2>Title</h2>
                <button>Love it!</button>
            </div>
        </div>
	);
}

export default GalleryItem;