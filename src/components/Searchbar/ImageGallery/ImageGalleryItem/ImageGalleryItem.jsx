// import PropTypes from 'prop-types';
// import { Component } from "react";
// import { Modal } from "components/Modal/Modal";
// import { } from "./ImageGalleryItem.styled";

// export class ImageGalleryItem extends Component {
//     state = {
//         showModale: false,
//     };

//     toggleModale = () => {
//         this.setState({ showModale: !this.state.showModale });
//     }
    
//     render() {
//         const { image, text, imageLarge } = this.props;
//         const { showModale } = this.state;
//         return (
//             <>
                
//                 <li>
//                     <img className="ImageGalleryItem"
//                         src={image}
//                         alt={text}
//                         loading="lazy"
//                         onClick={this.toggleModale}
//                     />

//                 </li>
//                 {showModale && (
//               <Modal onCloseModal={this.toggleModal}>
//               <img src={imageLarge} alt={text}  />
//                </Modal>
//           )}
                    
//             </>
//         );
//     }
// }

// ImageGalleryItem.propTypes = {
//     image: PropTypes.string.isRequired,
//     imageLarge: PropTypes.string.isRequired,
//     text: PropTypes.string.isRequired,
// };

import React from "react";
import PropTypes from "prop-types";
//import { GalleryItem, GalleryImg } from "./ImageGalleryItem.styled";
import { Modal } from "components/Modal/Modal";
import { GalleryItem, GalleryImg} from "./ImageGalleryItem.styled";
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
         <>
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
         </>
        )
    }
};

ImageGalleryItem.propTypes = {
    image: PropTypes.string.isRequired,
    imageLarge: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};
