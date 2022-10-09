import React from "react";
import PropTypes from "prop-types";
import { Modal } from "components/Modal/Modal";
import { GalleryItem, GalleryImg} from "./ImageGalleryItem.styled";
import { Box } from "Box";
//import { Box } from "components/Box";

export class ImageGalleryItem extends React.Component{
    state= {
        showModal: false,
    };

    toggleModal = () => {
        this.setState({showModal: !this.state.showModal})
    };
    
    render(){
        const {image, text, imageLarge} = this.props;
        const {showModal} = this.state; 
        return (
         <Box>
               <GalleryItem>
                <GalleryImg src={image} 
                            alt={text} 
                            loading="lazy"
                            onClick={this.toggleModal}/>
            </GalleryItem>
          {showModal &&(
              <Modal onCloseModal={this.toggleModal}>
              <img src={imageLarge} alt={text}  />
               </Modal>
          )}
         </Box>
        )
    }
};

ImageGalleryItem.propTypes = {
    image: PropTypes.string.isRequired,
    imageLarge: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};
