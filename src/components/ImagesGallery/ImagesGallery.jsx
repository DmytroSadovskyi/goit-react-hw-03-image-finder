import ImagesGalleryItem from '../ImagesGalleryItem';
import { Gallery } from './ImagesGallery.styled';
import { GalleryItem } from 'components/ImagesGalleryItem/ImagesGalleryItem.styled';
import PropTypes from 'prop-types';
const ImagesGallery = ({ images }) => {
  return (
    <Gallery>
      {images.map(({ webformatURL, tags }, index) => (
        <GalleryItem key={index}>
          <ImagesGalleryItem webformatURL={webformatURL} tags={tags} />
        </GalleryItem>
      ))}
    </Gallery>
  );
};

ImagesGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      index: PropTypes.number,
    })
  ).isRequired,
};

export default ImagesGallery;
