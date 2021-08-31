import React from 'react';

const ImageList = props => {
   const images = props.images.map(image => {
      return (
         <div className="item" key={image.id}>
            <img
               className="ui image"
               src={image.urls.regular}
               alt={image.alt_description}
            />
         </div>
      );
   });
   return <div className="ui list">{images}</div>;
};

ImageList.defaultProps = {
   images: [],
};
export default ImageList;
