import { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Header, SearchInput, SearchButton } from './Searchbar.styled';
import PropTypes from 'prop-types';
import { BiSearch } from 'react-icons/bi';
class Searchbar extends Component {
  state = {
    query: '',
  };

  handleChange = e => {
    const { value } = e.currentTarget;
    this.setState({ query: value.trim() });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.query.trim() === '') {
      return toast.error('Please write your search query');
    }
    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };

  render() {
    const { query } = this.state;
    return (
      <Header>
        <form onSubmit={this.handleSubmit}>
          <SearchButton type="submit">
            <BiSearch size={20} />
          </SearchButton>

          <SearchInput
            onChange={this.handleChange}
            value={query}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </Header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
