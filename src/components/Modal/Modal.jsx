import React from "react";
import PropTypes from "prop-types";
import { createPortal } from "react-dom";
import { BackDrop, ModalStyle } from "./Modal.styled";

const modalRoot = document.querySelector('#modal-root');

export class Modal extends React.Component {
    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
    };

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown);
    };
    
    handleKeyDown = (e) => {
        if(e.code === 'Escape'){
            this.props.onCloseModal();
        }
    };

    handleBackdropClick = (e) => {
        if(e.currentTarget === e.target) {
            this.props.onCloseModal();
        }
    };

    render() {
        return createPortal(
            <BackDrop onClick={this.handleBackdropClick}>
                <ModalStyle>
                    {this.props.children}
                </ModalStyle>
            </BackDrop>,
            modalRoot,
        )
    }
};

Modal.propTypes = {
    onCloseModal: PropTypes.func.isRequired,
};