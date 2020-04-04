// import need to use jsx
import React from 'react';

//Import GalleryItem to use when creating each image
import GalleryItem from '../GalleryItem/GalleryItem';

const GalleryList = ({pictures}) => {
	return(
		<div>
            {
                pictures.map((picture) => {
                    return(
                        <GalleryItem 
                        key={picture.id}
                        title={picture.title}
                        path={picture.path}
                        description={picture.description}
                        likes={picture.likes}
                        />
                    );
                })
            }
        </div>
	);
}

export default GalleryList;