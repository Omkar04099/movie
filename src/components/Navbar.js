import { render } from "@testing-library/react";
import React from "react";
import { addMovies, handleMovieSearch } from "../actions";
import { data } from "../data";
// import { data } from "../data";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
      searchText: "",
    };
  }

  handleAddToMovies = (movie) => {
    this.props.dispatch(addMovies(movie));
    this.setState({
      showSearchResults: false,
    });
  };

  handleChange = (e) => {
    this.setState({
      searchText: e.target.value,
    });
  };

  handleSearch = () => {
    // console.log('clicked')
    const { searchText } = this.state;
    // console.log(searchText)
    this.props.store.dispatch(handleMovieSearch(searchText));
  };
  render() {
    
    
    const { showSearchResults, result:movie } = this.props.search;
    return (
      <div className="nav">
        <div className="search-container">
          <input onChange={this.handleChange} />
          <button id="search-btn" onClick={this.handleSearch}>Search</button>

          {
            <div className="search-results">
              <div className="search-result">
                <img src={data[0].Poster} alt='search-pic'/>

                <div className="movie-info">
                  <span>{data[0].Title}</span>
                  <button onClick={this.handleAddToMovies(data[0])}>Add To Movies</button>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    );
  }
}

export default Navbar;
