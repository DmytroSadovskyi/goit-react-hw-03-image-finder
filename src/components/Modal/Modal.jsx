import { createPortal } from 'react-dom';
import { Component } from 'react';
import { ModalBackdrop, ModalContent } from './Modal.styled';
import { Image } from 'components/ImagesGalleryItem/ImagesGalleryItem.styled';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  componentDidMount() {
    console.log('Modal componentDidMount');
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    console.log('Modal componentWillUnmount');
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <ModalBackdrop onClick={this.handleBackdropClick}>
        <ModalContent>
          <Image />
        </ModalContent>
      </ModalBackdrop>,
      modalRoot
    );
  }
}
