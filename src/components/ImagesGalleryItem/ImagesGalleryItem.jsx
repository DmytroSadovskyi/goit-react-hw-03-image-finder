import { GalleryImage } from './ImagesGalleryItem.styled';
import PropTypes from 'prop-types';
import Modal from 'components/Modal/Modal';
import { Component } from 'react';
class ImagesGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => this.setState({ isModalOpen: true });
  closeModal = () => this.setState({ isModalOpen: false });
  render() {
    const { webformatURL, tags, info } = this.props;
    const { isModalOpen } = this.state;

    return (
      <>
        <GalleryImage
          src={webformatURL}
          alt={tags}
          info={info}
          onClick={this.openModal}
        />
        {isModalOpen && (
          <Modal
            largeImageUrl={this.props.info.largeImageUrl}
            tags={this.props.info.tags}
            onClose={this.closeModal}
          />
        )}
      </>
    );
  }
}

ImagesGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string,
  tags: PropTypes.string.isRequired,
};

export default ImagesGalleryItem;
