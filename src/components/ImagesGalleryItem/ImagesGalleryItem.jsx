import { GalleryImage } from './ImagesGalleryItem.styled';
import PropTypes from 'prop-types';
const ImagesGalleryItem = ({ webformatURL, tags }) => {
  return (
    <>
      <GalleryImage src={webformatURL} alt={tags} />
    </>
  );
};

ImagesGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};

export default ImagesGalleryItem;
