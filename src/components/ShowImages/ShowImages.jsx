import { Component } from 'react';
import fetchImagesByQuery from 'services/api-service';
import ImagesGallery from 'components/ImagesGallery';
import LoadMoreButton from 'components/Button';
import Spinner from 'components/Loader/Loader';
import PropTypes from 'prop-types';
class ShowImages extends Component {
  state = {
    images: [],
    page: 0,
    totalPages: 0,
    query: '',
    isLoading: false,
    error: null,
    showLoadMoreButton: true,
    isSubmited: false,
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.query !== nextProps.query) {
      return { page: 1, query: nextProps.query };
    }
    return null;
  }

  async componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevProps.query;
    const nextQuery = this.props.query;

    if (
      (nextQuery !== prevQuery && nextQuery !== '') ||
      this.state.page !== prevState.page
    ) {
      this.getImages();
    }
  }

  getImages = async () => {
    if (this.state.error) {
      this.setState({ error: null });
    }
    this.setState({ isLoading: true });
    try {
      const { hits, totalHits } = await fetchImagesByQuery(
        this.props.query,
        this.state.page
      );
      this.setState(prev => ({
        images: this.state.page === 1 ? hits : [...prev.images, ...hits],
        totalPages: Math.floor(totalHits / 12),
        showLoadMoreButton: true,
        isSubmited: true,
      }));
    } catch (err) {
      this.setState({ error: err });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  changePage = () => {
    this.setState(prev => ({ page: prev.page + 1 }));
    this.setState({ isLoading: true });
    this.setState({ showLoadMoreButton: false });
  };

  render() {
    const {
      query,
      images,
      isLoading,
      error,
      showLoadMoreButton,
      isSubmited,
      page,
      totalPages,
    } = this.state;
    if (error) {
      return <p>{error.message}</p>;
    }

    return (
      <>
        {!query && !images.length && (
          <div>There are no images here but you can search for something</div>
        )}
        {isSubmited && images.length === 0 && (
          <p>Sorry but we did not find images for {query} </p>
        )}
        {images.length > 0 && <ImagesGallery images={images} />}
        {isLoading && <Spinner />}

        {showLoadMoreButton && images.length > 0 && page <= totalPages && (
          <LoadMoreButton onButtonClick={this.changePage} />
        )}
      </>
    );
  }
}

ShowImages.propTypes = {
  query: PropTypes.string.isRequired,
};

export default ShowImages;
