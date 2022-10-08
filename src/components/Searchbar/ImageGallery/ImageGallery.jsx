//import PropTypes from 'prop-types';
import { ImageGalleryItem } from "./ImageGalleryItem/ImageGalleryItem";
import { Gallery } from "./ImageGallery.styled";

export const ImageGallery = ({ images }) => {
    return (
        <Gallery>
            {images.map(image =>(
                <ImageGalleryItem key = { image.id } 
                        image = { image.webformatURL }
                        text = { image.tags }
                        imageLarge = { image.largeImageURL } />

               
            )
        
            )}
        </Gallery>
    )
};

